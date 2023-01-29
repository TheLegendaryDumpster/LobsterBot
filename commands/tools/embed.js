const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");
const { Colors } = require('../../things.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName("about")
        .setDescription("About the bot"),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('About lobster_bot')
            .setDescription('Lobster_bot is a simple free and open source discord bot.\n\n------------------------Commands------------------------\n</about:0> You just did it.\n</allow-pings:0> Set if you want to be pinged or not.\n</credits:0> Show people who made the bot.\n</ping:0> See the bots ping.\n</say:0> Make the bot say things.')
            .setColor(Colors.Main)

        await interaction.reply({
            embeds: [embed]
        })
    }
}