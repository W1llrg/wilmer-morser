const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Replies with cool infos'),
    async execute(interaction) {
        msg = '```md .... .. / .. - ... / .-- .. .-.. -- . .-. / -- --- .-. ... . .-.```';
        await interaction.reply(msg);
    },
};