const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "blanka2",
    description: "Sfd Blanka Skills",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

    const TwoEmbed = {
      color: 0x0099ff,
      title: 'Blanka',
      description: 'Little Jimmy of the Rainforest',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094108012915986573/blanka-icon.png',
      },
      fields: [
        {
          name: 'Super: Shout of Earth',
          value: 'AoE',
        },
        {
          name: ' ',
          value: "Rolls and slams the ground, striking enemies in range with Electric Thunder 6 times to deal Thunder DMG equal to 543% of ATK to each target. If in Electrified state, 1x Electrified will be expended to unleash Electric Thunder over a large area, dealing Thunder DMG equal to 40% of ATK.",
        },
        {
          name: 'Upgrade 1.',
          value: 'Obtains Super Armor while performing this skill.',
        },
        {
          name: 'Upgrade 2.',
          value: "Increases DMG taken by all targets within range to 597% of ATK. Increases Electric Thunder DMG to 80% of ATK.",
        },
        {
          name: 'Electrified',
          value: "Counterattacks when getting hit, dealing Thunder DMG equal to 20% of ATK per stack. Performing a counterattack has a 15% chance to consume 1x Electrified. Electrified lasts 15s, stacks up to 10 times, and cannot be dispelled.",
        },
        {
          name: 'Super Armor',
          value: "Cannot be knocked back.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Combo One: Electric Thunder',
          value: 'AoE',
        },
        {
          name: ' ',
          value: "Strikes targets in range with a surge of Electric Thunder 9 times, dealing Thunder DMG equal to 475% of ATK to each target. Blanka gains 1x Electrified.",
        },
        {
          name: 'Upgrade 1.',
          value: 'Blanka takes 40% less DMG during Electric Thunder.',
        },
        {
          name: 'Upgrade 2.',
          value: "Enemy targets attacked by Electric Thunder are inflicted with Thunder Vulnerability for 8s.",
        },
        {
          name: 'Thunder Vulnerability',
          value: "Increases Thunder DMG taken by 10% for 8s.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Combo Two: Lightning Cannonball',
          value: 'AoE',
        },
        {
          name: ' ',
          value: "Strikes multiple targets 6 times, dealing Thunder DMG euql to 489% of ATK to each enemy. Blanka gains 1x Electrified. ",
        },
        {
          name: 'Upgrade 1.',
          value: "15% base chance of inflicting 1x Shock on the target with each hit.",
        },
        {
          name: 'Upgrade 2.',
          value: "Increases DMG to 561% of ATK. There's a 50% base chance to obtain 1x additional Electrified.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Passive: Lightning Counter',
          value: ' ',
        },
        {
          name: ' ',
          value: "Gains 1x Electrified when the battle begins.",
        },
        {
          name: 'Upgrade 1.',
          value: "When losing Electrified stacks, an allied fighter receives an Electrified Shield that blocks DMG equal to 10% of the fighter's max HP for 10s. Prioritizes the fighter without an active Electrified Shield and with the highest ATK.",
        },
        {
          name: 'Upgrade 2.',
          value: "Gain 3x Electrified when the battle begins.",
        },
        {
          name: 'Upgrade 3.',
          value: "Electrified Shield additionally increases the Thunder DMG dealt by the target by 20%.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~blanka2',
      },
    };
  message.channel.send({ embeds: [TwoEmbed] })
}};
