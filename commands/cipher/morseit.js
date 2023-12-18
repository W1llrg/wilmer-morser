const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const { morse } = require('../../util/morser.js');

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
        const msg = morse(text);
        const embed = new EmbedBuilder()
            .setTitle('Your morse text friendo')
            .setDescription(msg)
            .setColor('#00ff00');

        await interaction.reply({ embeds: [embed] });
    },
};