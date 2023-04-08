const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "cviper3",
    description: "Sfd C. Viper",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

    const ThreeEmbed = {
      color: 0x0099ff,
      title: 'C. Viper',
      description: 'The Perfect Agent',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094131995442954380/c.viper-icon.png',
      },
      fields: [
        {
          name: 'Blazing Battle Boots (+30)',
          value: 'Combat Power: 98k',
        },
        {
          name: ' ',
          value: 'HP + 18%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Atk + 18%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Def + 15%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Dmg Bonus + 6%',
          inline: true,
        },
        {
          name: 'Skill Upgrade: Master Spy',
          value: "When other allied fighters perform a Super Combo or Combo, C. Viper has a 40% chance to gain 1x Armor Energy.",
        },
        {
          name: '+5',
          value: "Assist Skill: Takes effect when the fighter is in an assist position. When the assisted fighter performs a Super Combo or Combo, C. Viper jumps into the fray and performs Seismic Hammer at the enemy fighter in the rear position, dealing DMG equal to 121% of ATK.",
        },
        {
          name: '+10',
          value: "At 5x Armor Energy, Super Combo triggers an additional Smash.",
        },
        {
          name: '+20',
          value: "At 5x Armor Energy, performing a Combo will trigger an additional strike that deals AoE Flame DMG equal to 187% of ATK to targets within range.",
        },
        {
          name: '+30',
          value: "At 5x Armor Energy, further Armor Energy gained will be transferred to random teammates.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~cviper3',
      },
    };
  message.channel.send({ embeds: [ThreeEmbed] })
}};
