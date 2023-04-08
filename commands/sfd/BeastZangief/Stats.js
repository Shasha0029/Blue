const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "bzangief1",
    alias: "bzan1",
    description: "Sfd BZangief Stats",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const OneEmbed = {
      color: 0x0099ff,
      title: 'Beast Zangief',
      description: 'Warrior of Winter',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094111666020548638/beast-zangief-icon.png',
      },
      fields: [
        {
          name: 'Rarity: ',
          value: 'A',
          inline: true,
        },
        {
          name: 'Speed: ',
          value: '116',
          inline: true,
        },
        {
          name: 'Type: ',
          value: 'Power',
          inline: true,
        },
        {
          name: 'Class: ',
          value: 'Balanced',
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
        text: '~bzangief1',
      },
    };
  message.channel.send({ embeds: [OneEmbed] })
}};
