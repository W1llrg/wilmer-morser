const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const Morser = require('../../util/morser.js');

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
        const msg = Morser.unmorse(text);

        if (msg === -1) {
            const embed = new EmbedBuilder()
                .setTitle('Hold on...')
                .setDescription(`Your input was: ${text}\nThe Great Wilmer Morser has figured out that you don't know what morse is.`)
                .setColor('#ff0000');

            await interaction.reply({ embeds: [embed] });
        } else {
            const embed = new EmbedBuilder()
                .setTitle('Your unmorsed text friendo')
                .setDescription(`Input message: \`${text}\`\nUnmorsed output: \`${msg}\``)
                .setColor('#ff0000');
    
            await interaction.reply({ embeds: [embed] });
        }
    },
};