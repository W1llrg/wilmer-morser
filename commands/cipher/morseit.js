const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const Morser = require('../../util/morser.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('morse-it')
        .setDescription('let the great Wilmer Morser morse it for you my friend')
        .addStringOption(option =>
            option.setName('text')
                .setDescription('the text you want me to morse')
                .setRequired(true)),
    async execute(interaction) {
        const text = interaction.options.getString('text') ?? 'you need to input text for me to morse it my friend';
        const morsed = Morser.morse(text);

        if (morsed[1] === true) {
            const embed = new EmbedBuilder()
                .setTitle('Your morse text friendo')
                .setDescription(`Input message: ${text}\nMorsed output: ${morsed[0]}\n\nThere were unknown characters in your input that I, the great Wilmer Morser, could not morse.`)
                .setColor('#00ff00');

            await interaction.reply({ embeds: [embed] });
        } else {
            const embed = new EmbedBuilder()
                .setTitle('Your morse text friendo')
                .setDescription(`Input message: ${text}\nMorsed output: ${morsed[0]}`)
                .setColor('#00ff00');

            await interaction.reply({ embeds: [embed] });
        }
    },
};