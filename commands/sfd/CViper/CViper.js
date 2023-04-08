const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "cviper",
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

    const TwoEmbed = {
      color: 0x0099ff,
      title: 'C. Viper',
      description: 'The Perfect Agent',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094131995442954380/c.viper-icon.png',
      },
      fields: [
        {
          name: 'Super: Seismic Hammer',
          value: 'AoE',
        },
        {
          name: ' ',
          value: "Slams the ground heavily, dealing DMG equal to 138% of ATK to multiple targets within a small area. Afterward, performs Seismic Hammer 2 times at the furthest target, dealing DMG equal to 484% of ATK to it.",
        },
        {
          name: 'Upgrade 1.',
          value: "Increases Smash DMG to 556% of ATK.",
        },
        {
          name: 'Upgrade 2.',
          value: "Smashes the furthest target 3 times.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Combo Two: Burning Kick',
          value: 'AoE',
        },
        {
          name: ' ',
          value: "Burning Kick causes a heavy hit to multiple enemies, dealing Flame DMG equal to 280% of ATK to each of them.",
        },
        {
          name: 'Upgrade 1.',
          value: "Increases DMG to 308% of ATK. There's a 50% base chance to inflict Detonation",
        },
        {
          name: 'Upgrade 2.',
          value: "There's a 100% base chance to inflict Detonation.",
        },
        {
          name: 'Detonation',
          value: "Causes Flame DMG equal to 30% of ATK and removes all Burn debuffs. Each stacks of Burn raises DMG by 100%.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Combo Three: Emergency Combination',
          value: 'AoE',
        },
        {
          name: ' ',
          value: "Smashes the ground to blast multiple targets 4 times, dealing Thunder DMG equal to 264% of ATK as well as Flame DMG equal to 264% of ATK to them.",
        },
        {
          name: 'Upgrade 1.',
          value: "The Thunder DMG is increased to 300% of ATK. Each instance of DMG has 40% base chance to inflict 1x Shock.",
        },
        {
          name: 'Upgrade 2.',
          value: "The Flame DMG is increased to 300% of ATK. Each instance of DMG has a 40% base chance to inflict 1x Burn.",
        },
        {
          name: 'Shock',
          value: "Target takes Thunder DMG equal to 10% of ATK for each attack received for 6s. Stacks up to 10 times.",
        },
        {
          name: 'Burn',
          value: "Target loses HP equal to 7% of ATK every second for 15s. Stacks up to 20 times.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Passive: The Perfect Agent',
          value: ' ',
        },
        {
          name: ' ',
          value: "Gains 1x Armor Energy when performing a Super Combo or Combo.",
        },
        {
          name: 'Upgrade 1.',
          value: "Each stack of Armor Energy additional increases DMG reduction by 5%.",
        },
        {
          name: 'Upgrade 2.',
          value: "Each stack of Armor Energy additional increases Pressure by 5%.",
        },
        {
          name: 'Upgrade 3.',
          value: "Gain 2 stacks of Armor Energy upon entering the battle.",
        },
        {
          name: 'Armor Energy',
          value: "Increases DMG and Effect Accuracy by 5%. Stacks up to 5 times.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~cviper2',
      },
    };

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
  message.channel.send({ embeds: [OneEmbed] })
    message.channel.send({ embeds: [TwoEmbed] })
      message.channel.send({ embeds: [ThreeEmbed] })
}};
