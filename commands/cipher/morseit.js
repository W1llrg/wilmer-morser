const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('morseit')
        .setDescription('let the great Wilmer Morser morse it for you my friend')
        .addStringOption(option =>
            option.setName('text')
                .setDescription('the text you want me to morse')),
    async execute(interaction) {
        const text = interaction.options.getString('text') ?? 'you need to input text for me to morse it my friend';
    },
};