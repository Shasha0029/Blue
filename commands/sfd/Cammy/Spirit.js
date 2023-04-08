const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "cammy3",
    description: "Sfd Cammy Spirit",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

    const ThreeEmbed = {
      color: 0x0099ff,
      title: 'Cammy',
      description: 'Killer Bee',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094115835439747133/Screen-Shot-2023-03-13-at-2.32.01-AM.png',
      },
      fields: [
        {
          name: 'Poison Bee Crown (+30)',
          value: 'Combat Power: 99k',
        },
        {
          name: ' ',
          value: 'HP + 15%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Atk + 18%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Crit Rate + 8%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Dodge + 6%',
          inline: true,
        },
        {
          name: 'Skill Upgrade: Stinger',
          value: "Fusilli Smash replaces Cannon Strike. Strikes an enemy 7 times, dealing DMG equal to 1,104% of ATK. Meanwhile, deals DMG equal to 5% of the target's current HP but no more than (8% of fighter's own ATK x the target's number of Armor Break stacks).",
        },
        {
          name: '+5',
          value: "Assist Skill: Takes effect when the fighter is in an assist position. When the battle begins or when the assisted fighter performs a Trigger Skill, kick the enemy target in the front position 4 times to deal DMG equal to 120% of ATK, inflicting 1x Armor Break.",
        },
        {
          name: '+10',
          value: "Fusilli Smash cannot be interrupted.",
        },
        {
          name: '+20',
          value: "Increases the bonus DMG to (12% x the fighter's ATK x enemy's Armor Break stack count)",
        },
        {
          name: '+30',
          value: "If the enemy has 10x Armor Break, Fusilli Smash deals an additional 20% DMG.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~cammy3',
      },
    };
  message.channel.send({ embeds: [ThreeEmbed] })
}};
