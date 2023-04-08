const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "combatguile1",
    alias: "cguile1",
    description: "Sfd Combat Guile",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const OneEmbed = {
      color: 0x0099ff,
      title: 'Combat Guile',
      description: 'Fearless Soilder',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094128643539742810/combat-guile-icon.png',
      },
      fields: [
        {
          name: 'Rarity: ',
          value: 'A',
          inline: true,
        },
        {
          name: 'Speed: ',
          value: '104',
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
          value: 'Thunder',
          inline: true,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~cguile1',
      },
    };
  message.channel.send({ embeds: [OneEmbed] })
}};
