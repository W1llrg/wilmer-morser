const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Replies with cool infos'),
    async execute(interaction) {
        msg = '```.... .. / .. - ... / .-- .. .-.. -- . .-. / -- --- .-. ... . .-.```';
        await interaction.reply(msg);
    },
};