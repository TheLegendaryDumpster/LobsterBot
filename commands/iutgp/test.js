const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("testtitle")
        .setDescription("test")
        .addStringOption(option=>
            option.setName("string")
                .setDescription("TEST")
                .setRequired(true)),
    async execute(interaction, client, fns) {
        interaction.reply(`u inputted ${interaction.options.get('string').value}`)
    }
}