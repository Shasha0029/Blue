const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "chunli2",
    description: "Sfd Chun-Li Skills",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

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
  message.channel.send({ embeds: [TwoEmbed] })
}};
