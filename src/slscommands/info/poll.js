const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'poll',
  description: 'To make a poll.',
  permissions: ['SEND_MESSAGES', 'MANAGE_MESSAGES'],
  type: 1,
  options: [
    {
      name: 'subject',
      description: 'Specify a subdject.',
      required: true,
      type: 'STRING',
    },
    {
      name: 'channel',
      description: 'Specify a channel.',
      required: false,
      type: 'CHANNEL',
    },
  ],

  run: async (client, interaction, args) => {
    const pollContent = interaction.options.getString('subject');
    const pollChannel = interaction.options.getChannel('channel');

    const embed = new MessageEmbed()
        .setTitle(pollContent)
        .setColor('#4D6FFF')
        .setFooter({
          text: `New poll generated by ${interaction.user.tag}`,
          iconURL: interaction.user.avatarURL(),
        })
        .setTimestamp();
    await interaction.editReply({
      content: `✅ » Poll sucessfuly created in <#${pollChannel.id}>`,
      fetchReply: true,
    });
    const selectChannel = client.channels.cache.get(pollChannel.id);
    const poll = await selectChannel.send({ embeds: [embed] });
    poll.react('✅');
    poll.react('❌');
  },
};
