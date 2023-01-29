const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("about")
        .setDescription("About the bot"),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle('About lobster_bot')
            .setDescription('Lobster_bot is a simple free and open source discord bot\n[Website](https://thelegendarydumpster.github.io/LobsterBot/)\n[Support Server](https://discord.gg/azalea-essentials)')
            .setColor(0x53a4f5)
        
        await interaction.reply({
            embeds: [embed]
        })
    }
}