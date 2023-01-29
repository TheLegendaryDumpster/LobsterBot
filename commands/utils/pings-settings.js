const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("allow-pings")
        .setDescription("Set if you want to be pinged or not")
        .addBooleanOption(option=>
            option.setName("boolean")
                .setDescription("True / false")
                .setRequired(false)),
    async execute(interaction, client, fns) {
        try {
        let bool = interaction.options.get("boolean");
        if(bool) {
            await fns.put("AllowPings_"+interaction.user.id, bool.value);
            await interaction.reply({content: bool.value ? `✅ Pings enabled` : `❌ Pings disabled`, ephemeral: true});
        } else {
            let isAllowed;
            try {
                let dataObj = await fns.get("AllowPings_"+interaction.user.id);
                isAllowed = dataObj.data == 'false' ? false : true;
            } catch(e) {
                console.error(e);
                isAllowed = true;
            }
            await interaction.reply({content: isAllowed ? `✅ Pings are currently enabled` : `❌ Pings are currently disabled`, ephemeral: true});
        }
    } catch {
        let isAllowed;
        console.log("aSda")
        try {
            let dataObj = await fns.get("AllowPings_"+interaction.user.id);
            isAllowed = dataObj.data == 'false' ? false : true;
        } catch(e) {
            console.error(e);
            isAllowed = true;
        }
        await interaction.reply({content: isAllowed ? `✅ Pings are currently enabled` : `❌ Pings are currently disabled`, ephemeral: true});

    }
    }
}