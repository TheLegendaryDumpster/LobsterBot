const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("say")
        .setDescription("Make the bot say something.")
        .addStringOption(option=>
            option.setName("text")
                .setDescription("What to say.")
                .setRequired(true)),
    async execute(interaction, client, fns) {
        interaction.reply(interaction.options.get('string').value)
    }
}