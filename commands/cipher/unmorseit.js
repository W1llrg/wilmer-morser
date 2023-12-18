const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const { unmorse } = require('../../util/morser.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('unmorse-it')
        .setDescription('let the great Wilmer Morser unmorse it for you fella')
        .addStringOption(option =>
            option.setName('text')
                .setDescription('the text you want me to unmorse')),
    async execute(interaction) {
        const text = interaction.options.getString('text') ?? 'you need to input text for me to morse it my friend';
        const msg = unmorse(text);
        const embed = new EmbedBuilder()
            .setTitle('Your unmorsed text friendo')
            .setDescription(msg)
            .setColor('#ff0000');

        await interaction.reply({ embeds: [embed] });
    },
};