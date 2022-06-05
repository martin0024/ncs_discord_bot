module.exports = {
  name: 'ping',
  description: 'Check the ping of the bot.',
  permissions: ['SEND_MESSAGES', 'MANAGE_MESSAGES'],

  run: async (client, interaction, args) => {
    await interaction.reply(
        `🏓 The ping of the bot is at ${Math.round(client.ws.ping)}ms.`,
    );
  },
};
