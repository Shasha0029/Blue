const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "adonis3",
    description: "Sfd Adonis Spirit",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

    const ThreeEmbed = {
      color: 0x0099ff,
      title: 'Adonis',
      description: 'Emperor of Muay Thai',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094092397954203809/adon-icon.png',
      },
      fields: [
        {
          name: 'Jaguar Shoulder Blade (+30)',
          value: 'Combat Power: 98k',
        },
        {
          name: ' ',
          value: 'HP + 21%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Atk + 15%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Pressure + 6%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Dodge + 6%',
          inline: true,
        },
        {
          name: 'Skill Upgrade: Jaguar Boxer',
          value: "Adon's Crit DMG is increased by 25% for each Hatred Mark that exists.",
        },
        {
          name: '+5',
          value: "Assist Skill: Takes effect when the fighter is in an assist position. When an allied fighter is knocked out, the assisted fighter inflicts the enemy that delivers the killing blow with Hatred Mark, lasting until the target dies. When the assisted fighter deals DMG to the marked unit, they receive 18% of Adon's ATK as a bonus. Hatred Mark cannot be dispelled.",
        },
        {
          name: '+10',
          value: "Crit DMG of other allied fighters is increased by 10% for each Hatred Mark that exists.",
        },
        {
          name: '+20',
          value: "Each Hatred Mark increases Adon's Crit DMG by 35% and that of other allied fighters by 15%.",
        },
        {
          name: '+30',
          value: "Other allied fighters deal 20% increased DMG to targets with Hatred Mark.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~adonis3',
      },
    };
  message.channel.send({ embeds: [ThreeEmbed] })
}};
