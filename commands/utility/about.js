const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Replies with cool infos'),
    async execute(interaction) {
        msg = '```A5x87fEKD6Ua9/N5R6+0jB4KlWmYDF92NgShA/+/qCJoJd16sK2vua5JL7WIfrWO9q7s0gTpaCcjjmWPW7IHjOMwTeOFCyGTQg1I5FE/Z8YfJneiBpE9A5dI3W13vf12g5zw51opK9c=```';
        await interaction.reply(msg);
    },
};