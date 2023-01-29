const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("credits")
        .setDescription("See the people who actually helped!"),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('Credits')
            .setDescription('eye#1485\nZobblestone Studios#0001')
            .setColor(0x53a4f5)
        
        await interaction.reply({
            embeds: [embed]
        })
    }
}