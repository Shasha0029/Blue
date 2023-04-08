const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "chunli",
    description: "Sfd Cammy",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const OneEmbed = {
      color: 0x0099ff,
      title: 'Chun-Li',
      description: 'Heavenly Kicks',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094123575994228787/chun-li-icon.png',
      },
      fields: [
        {
          name: 'Rarity: ',
          value: 'A',
          inline: true,
        },
        {
          name: 'Speed: ',
          value: '125',
          inline: true,
        },
        {
          name: 'Type: ',
          value: 'Tech',
          inline: true,
        },
        {
          name: 'Class: ',
          value: 'Assassin',
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
        text: '~chunli1',
      },
    };

    const TwoEmbed = {
      color: 0x0099ff,
      title: 'Chun-Li',
      description: 'Heavenly Kicks',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094123575994228787/chun-li-icon.png',
      },
      fields: [
        {
          name: 'Super: Kikosho',
          value: 'AoE',
        },
        {
          name: ' ',
          value: "Charges up energy, striking multiple targets within a small area in front of the fighter, dealing DMG equal to 150% of ATK to each of them, and lowering DMG Resist Rate by 10% for 5s. Afterward, unleashes an energy wave that penetrates all enemy targets and deals DMG equal to 170% of ATK. For every enemy target it passes through, the energy wave grows greater in size and causes an additional 10% DMG, stacking up to 2 times.",
        },
        {
          name: 'Upgrade 1.',
          value: "Fills the Super Combo Gauge by an additional 150 upon defeating an enemy.",
        },
        {
          name: 'Upgrade 2.',
          value: "Adjusts the DMG bonus when penetrating enemies to 18%.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Combo Two: Reverse Whirlwind Kick',
          value: 'AoE',
        },
        {
          name: ' ',
          value: "Jump upside-down and strike multiple enemies with 10 kicks, dealing DMG equal to 468% of ATK to each enemy.",
        },
        {
          name: 'Upgrade 1.',
          value: 'DMG increases by 25% if the skill does not score a Crit.',
        },
        {
          name: 'Upgrade 2.',
          value: "DMG increases to 620% of ATK.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Combo Three: Senretsukyaku',
          value: 'Single Target',
        },
        {
          name: ' ',
          value: "Strike the enemy with 9 kicks, dealing DMG equal to 850% of ATK.",
        },
        {
          name: 'Upgrade 1.',
          value: "Deal 3% additional DMG for each stack of Armor Break on the target.",
        },
        {
          name: 'Upgrade 2.',
          value: "Increases DMG Bonus of each stack of Armor Break to 4%.",
        },
        {
          name: 'Armor Break',
          value: "Decreases DEF by 3% for 15s. Stacks up to 10 times.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Passive: Heavenly Kicks',
          value: ' ',
        },
        {
          name: ' ',
          value: "Fills the Super Combo Gauge by 100 upon scoring a Crit with a skill. Trigger intervals: 10s.",
        },
        {
          name: 'Upgrade 1.',
          value: "Additionally increases ATK by 5% when this effect triggers. Lasts 12s and stacks up to 5 times.",
        },
        {
          name: 'Upgrade 2.',
          value: "Energy Restoration increased to 125.",
        },
        {
          name: 'Upgrade 3.',
          value: "Trigger interval is reduced to 75%.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~chunli2',
      },
    };

    const ThreeEmbed = {
      color: 0x0099ff,
      title: 'Chun-Li',
      description: 'Heavenly Kicks',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094123575994228787/chun-li-icon.png',
      },
      fields: [
        {
          name: 'Dragon Wrist Spikes (+30)',
          value: 'Combat Power: 98k',
        },
        {
          name: ' ',
          value: 'HP + 21%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Atk + 12%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Def + 18%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Crit Rate + 9%',
          inline: true,
        },
        {
          name: 'Skill Upgrade: Whirlwind',
          value: "Whirlwind replaces Senretsukyaku. Strike multiple targets 2 times, dealing DMG to each target equal to 250% of ATK. Strike the nearest enemy with 5 kicks, dealing DMG equal to 650% of ATK. If the target has Armor Break, each stack of Armor Break increases DMG by 4%.",
        },
        {
          name: '+5',
          value: "Assist Skill: Effective when a fighter is in an assist position. Assist Fighters receive 15% of Chun-Li's Crit. ",
        },
        {
          name: '+10',
          value: "Increases DMG Bonus of each stack of Armor Break to 5%.",
        },
        {
          name: '+20',
          value: "Whirlwind grants all teammates 50 Speed and increases the whole team's Super Combo Gauge progress gained from regular attacks by 100% for 15s.",
        },
        {
          name: '+30',
          value: "Each Crit triggered by Whirlwind fills the Super Combo Gauge by an additional 30.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~chunli3',
      },
    };
  message.channel.send({ embeds: [OneEmbed] })
    message.channel.send({ embeds: [TwoEmbed] })
      message.channel.send({ embeds: [ThreeEmbed] })
}};
