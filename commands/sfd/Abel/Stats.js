const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "abel1",
    description: "Sfd Abel Stats",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

    const OneEmbed = {
      color: 0x0099ff,
      title: 'Abel',
      description: 'Man with no past',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094033418012069969/image0.png',
      },
      fields: [
        {
          name: 'Rarity: ',
          value: 'A',
          inline: true,
        },
        {
          name: 'Speed: ',
          value: '101',
          inline: true,
        },
        {
          name: 'Type: ',
          value: 'Power',
          inline: true,
        },
        {
          name: 'Class: ',
          value: 'Tank',
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
        text: '~abel1',
      },
    };
  message.channel.send({ embeds: [OneEmbed] })
}};
