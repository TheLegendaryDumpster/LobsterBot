const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { Colors } = require('../../things');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("profanity-filter")
        .setDescription("Set if you want profanity filter enabled or not")
        .addBooleanOption(option =>
            option.setName("boolean")
                .setDescription("True / false")
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator | PermissionFlagsBits.ManageChannels | PermissionFlagsBits.ManageGuild),
    async execute(interaction, client, fns) {
        let bool = interaction.options.get("boolean");
        if (bool) {
            await fns.put("Filter" + interaction.guildId, bool.value);
            await interaction.reply({
                embeds: [{
                    title: bool.value ? `✅ Filter enabled` : `❌ Filter disabled`, ephemeral: true,
                    color: bool.value ? Colors.Success : Colors.Error
                }],
                ephemeral: true
            });
        }
    }
}