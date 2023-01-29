const {SlashCommandBuilder, PermissionFlagsBits, ChannelType} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suggestions-channel')
        .setDescription('Set the suggestions channel!')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator | PermissionFlagsBits.ManageChannels | PermissionFlagsBits.ManageGuild)
        .addChannelOption(option=>
            option.setName('channel')
                    .setDescription('The channel for suggestions!')
                    .setRequired(true)
                    .addChannelTypes(ChannelType.GuildText)),
    async execute(interaction, client, fns) {
        try {
            let testVal = await fns.put("SuggestChannel"+interaction.guildId, interaction.options.get('channel').value);
            await interaction.reply('Channel successfully changed!');
        } catch {
            await interaction.reply('An error occurred while setting the suggestions channel.');
        }
    }
}