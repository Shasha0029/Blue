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

    const ThreeEmbed = {
      color: 0x0099ff,
      title: 'Combat Guile',
      description: 'Fearless Soilder',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094128643539742810/combat-guile-icon.png',
      },
      fields: [
        {
          name: 'Field Ops Badge (+30)',
          value: 'Combat Power: 99k',
        },
        {
          name: ' ',
          value: 'HP + 30%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Atk + 12%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Pressure + 4%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Dodge + 4%',
          inline: true,
        },
        {
          name: 'Skill Upgrade: Special Ops Captain',
          value: "Restores 7% of max HP upon a successful dispelling. Trigger interval: 10s.",
        },
        {
          name: '+5',
          value: "Assist Skill: Takes effect when the fighter is in an assist position. When the assisted fighter deals Skill DMG, there's a 8% chance to dispel a buff on the target. Trigger interval: 10s. When a buff dispelled successfully, all enemies take Thunder DMG equal to 5% of Combat Guile's max HP (up to 50% of the assisted fighter's ATK.)",
        },
        {
          name: '+10',
          value: "Increases ATK by 3% when a buff is dispelled successfully. Stacks up to 18%.",
        },
        {
          name: '+20',
          value: "The HP restoration effect can trigger once every 7s. Increases the max ATK bonus to 24%.",
        },
        {
          name: '+30',
          value: "Army Knife Boom Chain's every strike has a 20% chance to dispel a buff from the target.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~chguile3',
      },
    };
  message.channel.send({ embeds: [ThreeEmbed] })
}};
