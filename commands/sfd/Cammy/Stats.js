const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "cammy1",
    description: "Sfd Cammy",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const OneEmbed = {
      color: 0x0099ff,
      title: 'Cammy',
      description: 'Killer Bee',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094115835439747133/Screen-Shot-2023-03-13-at-2.32.01-AM.png',
      },
      fields: [
        {
          name: 'Rarity: ',
          value: 'A',
          inline: true,
        },
        {
          name: 'Speed: ',
          value: '123',
          inline: true,
        },
        {
          name: 'Type: ',
          value: 'Tech',
          inline: true,
        },
        {
          name: 'Class: ',
          value: 'Assassin',
          inline: true,
        },
        {
          name: 'Faction: ',
          value: 'Wind',
          inline: true,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~cammy1',
      },
    };
  message.channel.send({ embeds: [OneEmbed] })
}};
