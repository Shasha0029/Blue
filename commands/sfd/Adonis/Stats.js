const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "adonis",
    description: "Sfd Adonis Stats",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const OneEmbed = {
      color: 0x0099ff,
      title: 'Adonis',
      description: 'Emperor of Muay Thai',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094092397954203809/adon-icon.png',
      },
      fields: [
        {
          name: 'Rarity: ',
          value: 'A',
          inline: true,
        },
        {
          name: 'Speed: ',
          value: '112',
          inline: true,
        },
        {
          name: 'Type: ',
          value: 'Agility',
          inline: true,
        },
        {
          name: 'Class: ',
          value: 'Balanced',
          inline: true,
        },
        {
          name: 'Faction: ',
          value: 'Flame',
          inline: true,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~adonis1',
      },
    };
  message.channel.send({ embeds: [OneEmbed] })
}};
