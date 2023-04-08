const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "charmingdudley1",
    alias: "cdudley1",
    description: "Sfd Charming Dudley Stats",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const OneEmbed = {
      color: 0x0099ff,
      title: 'Charming Dudley',
      description: '*Charming*',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094119177477951508/charming-dudley-icon.png',
      },
      fields: [
        {
          name: 'Rarity: ',
          value: 'A',
          inline: true,
        },
        {
          name: 'Speed: ',
          value: '107',
          inline: true,
        },
        {
          name: 'Type: ',
          value: 'Tech',
          inline: true,
        },
        {
          name: 'Class: ',
          value: 'Balanced',
          inline: true,
        },
        {
          name: 'Faction: ',
          value: 'Thunder',
          inline: true,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~cdudley1',
      },
    };
  message.channel.send({ embeds: [OneEmbed] })
}};
