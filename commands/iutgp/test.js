const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("say")
        .setDescription("Make the bot say something.")
        .addStringOption(option=>
<<<<<<< HEAD
            option.setName("Text")
                .setDescription("What to say.")
                .setRequired(true)),
    async execute(interaction, client, fns) {
        interaction.reply(interaction.options.get('string').value)
=======
            option.setName("string")
                .setDescription("TEST")
                .setRequired(true))
        .addUserOption(option=>
            option.setName("user")
                .setDescription("ping someone")
                .setRequired(true)),
    async execute(interaction, client, fns) {
        interaction.reply(`u inputted ${interaction.options.get('string').value} and pinged <@${interaction.options.get('user').value}>`)
>>>>>>> 1d5db9f597b5773bd19653d8712c54a5ec344903
    }
}