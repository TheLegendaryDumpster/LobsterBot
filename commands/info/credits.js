const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");
const { Colors } = require("../../things");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("credits")
        .setDescription("See the people who actually helped!"),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('Credits')
            .setDescription('eye#1485\nZobblestone Studios#0001\nKaitlyn#7640 (aka worst bot developer in the world)')
            .setColor(Colors.Main)

        await interaction.reply({
            embeds: [embed]
        })
    }
}