const { SlashCommandBuilder } = require('discord.js');
const { Colors } = require('../../things');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("allow-pings")
        .setDescription("Set if you want to be pinged or not")
        .addBooleanOption(option =>
            option.setName("boolean")
                .setDescription("True / false")
                .setRequired(false)),
    async execute(interaction, client, fns) {
        try {
            let bool = interaction.options.get("boolean");
            if (bool) {
                await fns.put("AllowPings_" + interaction.user.id, bool.value);
                await interaction.reply({
                    embeds: [
                        {
                            title: bool.value ? `✅ Pings enabled` : `❌ Pings disabled`,
                            color: bool.value ? Colors.Success : Colors.Error
                        }
                    ],
                    ephemeral: true
                });
            } else {
                let isAllowed;
                try {
                    let dataObj = await fns.get("AllowPings_" + interaction.user.id);
                    isAllowed = dataObj.data == 'false' ? false : true;
                } catch (e) {
                    console.error(e);
                    isAllowed = true;
                }
                await interaction.reply({
                    embeds: [
                        {
                            description: isAllowed ? `✅ Pings are currently enabled` : `❌ Pings are currently disabled`,
                            color: isAllowed ? Colors.Success : Colors.Error
                        }
                    ],
                    ephemeral: true
                });
            }
        } catch {
            let isAllowed;
            console.log("aSda")
            try {
                let dataObj = await fns.get("AllowPings_" + interaction.user.id);
                isAllowed = dataObj.data == 'false' ? false : true;
            } catch (e) {
                console.error(e);
                isAllowed = true;
            }
            await interaction.reply({
                embeds: [
                    {
                        description: isAllowed ? `✅ Pings are currently enabled` : `❌ Pings are currently disabled`,
                        color: isAllowed ? Colors.Success : Colors.Error
                    }
                ],
                ephemeral: true
            });

        }
    }
}