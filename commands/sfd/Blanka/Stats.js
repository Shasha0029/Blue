const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "blanka1",
    description: "Sfd Blanka Stats",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const OneEmbed = {
      color: 0x0099ff,
      title: 'Blanka',
      description: 'Little Jimmy of the Rainforest',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094108012915986573/blanka-icon.png',
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
          value: 'Thunder',
          inline: true,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~blanka1',
      },
    };
  message.channel.send({ embeds: [OneEmbed] })
}};
