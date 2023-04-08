const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "blanka3",
    description: "Sfd Blanka Spirit",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

    const ThreeEmbed = {
      color: 0x0099ff,
      title: 'Blanka',
      description: 'Little Jimmy of the Rainforest',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094108012915986573/blanka-icon.png',
      },
      fields: [
        {
          name: 'Shining Hoop (+30)',
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
          value: 'Def + 21%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Dmg Reduction + 6%',
          inline: true,
        },
        {
          name: 'Skill Upgrade: Jungle Warrior',
          value: "Incoming melee attacks have a 20% chance to trigger Electric Counterattack, dealing Thunder DMG equal to 258% of ATK to targets within range and granting 1x Electrified. Trigger interval: 12s.",
        },
        {
          name: '+5',
          value: "Assist Skill: Takes effect when the fighter is in an assist position. When the assisted fighter is attacked, they have a 20% chance to counterattack with Electric Claw, dealing Thunder DMG equal to 50% of Blanka's ATK, with a 25% base chance to inflict 1x Shock. Trigger interval: 3s.",
        },
        {
          name: '+10',
          value: "After unleashing Electric Claw, the fighter gains Electric Shield.",
        },
        {
          name: '+20',
          value: "Trigger interval: 8s.",
        },
        {
          name: '+30',
          value: "After unleashing Electric Claw, all teammates gain Electric Shield.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~blanka3',
      },
    };
  message.channel.send({ embeds: [ThreeEmbed] })
}};
