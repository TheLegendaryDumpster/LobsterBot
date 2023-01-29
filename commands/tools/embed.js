const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("about")
        .setDescription("About the bot"),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('About lobster_bot')
            .setDescription('Lobster_bot is a simple free and open source discord bot.\n\n------------------------Commands------------------------\n/about ¦ You just did it.\n/allow-pings ¦ Set if you want to be pinged or not.\n/credits ¦ Show people who made the bot.\n/ping ¦ See the bots ping.\n/say ¦ Make the bot say things.')
            .setColor(0x53a4f5)
                             
        await interaction.reply({
            embeds: [embed]
        })
    }
}