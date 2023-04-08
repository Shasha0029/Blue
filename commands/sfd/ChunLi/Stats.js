const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "chunli1",
    description: "Sfd Chun-Li Stats",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const OneEmbed = {
      color: 0x0099ff,
      title: 'Chun-Li',
      description: 'Heavenly Kicks',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094123575994228787/chun-li-icon.png',
      },
      fields: [
        {
          name: 'Rarity: ',
          value: 'A',
          inline: true,
        },
        {
          name: 'Speed: ',
          value: '125',
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
        text: '~chunli1',
      },
    };
  message.channel.send({ embeds: [OneEmbed] })
}};
