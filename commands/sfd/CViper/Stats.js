const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "cviper1",
    description: "Sfd C. Viper",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const OneEmbed = {
      color: 0x0099ff,
      title: 'C. Viper',
      description: 'The Perfect Agent',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094131995442954380/c.viper-icon.png',
      },
      fields: [
        {
          name: 'Rarity: ',
          value: 'A',
          inline: true,
        },
        {
          name: 'Speed: ',
          value: '103',
          inline: true,
        },
        {
          name: 'Type: ',
          value: 'Tech',
          inline: true,
        },
        {
          name: 'Class: ',
          value: 'Attack',
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
        text: '~cviper1',
      },
    };
  message.channel.send({ embeds: [OneEmbed] })
}};
