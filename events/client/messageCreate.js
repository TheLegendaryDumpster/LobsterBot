const { ButtonBuilder } = require("@discordjs/builders")
const { ActionRowBuilder, ButtonStyle } = require("discord.js")
const profanity = require('../../profanity.js');
// ⬆️⬇️✅⛔⚒️
module.exports = {
    name: "messageCreate",
    async execute(message, client, fns) {
        if(message.author.bot) return;
        const users = message.mentions.users.map((user) => user.id);
        // const userTags = message.mentions.users.map((user) => user.tag);
        const disallowedUsers = [];
        let profanityFilterEnabled = false;
        try {
            let profanityFilterEnabledObj = await fns.get("Filter"+message.guildId);
            profanityFilterEnabled = profanityFilterEnabledObj.data == 'true' ? true : false;
        } catch {}
        if(process.env.TESTING && message.guildId == process.env.guildId && profanityFilterEnabled && profanity.some(word=>message.content.includes(word))) {
            await message.delete();
            await message.author.send('Please do not say that here!')
        }
        for(let i = 0;i < users.length;i++) {
            let user = users[i];
            let isAllowed = true;
            try {
                let userPingData = await fns.get(`AllowPings_${user}`);
                isAllowed = userPingData.data == 'false' ? false : true;
            } catch {
                isAllowed = true;
            }
            if(!isAllowed) {
                disallowedUsers.push(users[i]);
            }
        }
        if(disallowedUsers.length) {
            await message.reply({
                embeds: [
                    {
                        title: `${disallowedUsers.length} user${disallowedUsers.length > 1 ? "s has" : " has"} pings disabled`,
                        description: `Users: <@${disallowedUsers.join(">, <@")}>`,
                        color: 0xff4400
                    }
                ]
            })
        }
        let suggestionsChannel = '0';
        try {
            let suggestionsChannelObj = await fns.get('SuggestChannel'+message.guildId);
            suggestionsChannel = suggestionsChannelObj.data;
        } catch {}
        if(message.channelId == suggestionsChannel) {
            let currentSuggestionCount = await fns.get('SuggestionCount-'+message.guildId);
            if(currentSuggestionCount.data) {
                await fns.put('SuggestionCount-'+message.guildId, currentSuggestionCount.data + 1)
            } else {
                await fns.put('SuggestionCount-'+message.guildId, 2)
            }
            let btn = new ButtonBuilder()
                .setCustomId('accept')
                .setLabel('Done')
                .setStyle(ButtonStyle.Success);
            let btn2 = new ButtonBuilder()
                .setCustomId('deny')
                .setLabel('Deny')
                .setStyle(ButtonStyle.Danger);
            let btn3 = new ButtonBuilder()
                .setCustomId('underconstruction')
                .setLabel('Under Construction')
                .setStyle(ButtonStyle.Secondary)
            let msg = await message.channel.send({
                embeds: [
                    {
                        color: 0xff5500,
                        title: `Suggestion #${currentSuggestionCount.data ?? 1}`,
                        description: message.content,
                        footer: {
                            text: "Status: Pending"
                        },
                        author: {
                            name: message.author.tag
                        }
                    }
                ],
                components: [new ActionRowBuilder().addComponents(btn).addComponents(btn2).addComponents(btn3)]
            });
            await msg.react('⬆️')
            await msg.react('⬇️');
            await message.delete();
        }
    }
}