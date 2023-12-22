const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const Morser = require('../../util/morser.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('alphabet')
        .setDescription('The knowledge of the alphabet is the doorway to wisdom'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('The alphabet')
            .setDescription(Morser.morseToString())
            .setColor('#0000ff');

        await interaction.reply({ embeds: [embed] });
    },
};