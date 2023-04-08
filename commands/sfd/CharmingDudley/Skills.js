const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "charmingdudley2",
    alias: "cdudley2",
    description: "Sfd Charming Dudley Skills",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

    const TwoEmbed = {
      color: 0x0099ff,
      title: 'Charming Dudley',
      description: '*Charming*',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094119177477951508/charming-dudley-icon.png',
      },
      fields: [
        {
          name: 'Super: Fragmented Rose',
          value: 'Single Target',
        },
        {
          name: ' ',
          value: "Casts a black rose to the nearest target and crushes the rose, dealing DMG equal to 529% of ATK and inflicting 1x Black Rose Mark.",
        },
        {
          name: 'Upgrade 1.',
          value: "Increases DMG to 608% of ATK.",
        },
        {
          name: 'Upgrade 2.',
          value: "Increases the duration of Black Rose Mark to 15s and the healing transferred to 35%",
        },
        {
          name: 'Black Rose Mark',
          value: "When a target has Black Rose Mark, 20% of the healing it receives will be transferred to Charming Dudley. Lasts 12s.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Combo One: Misty Punch',
          value: 'Single Target',
        },
        {
          name: ' ',
          value: "Throws a hook punch at the nearest target, dealing DMG equal to 362% ATK. Reduces the target's Pressure by 10% and Dodge by 10% for 10s.",
        },
        {
          name: 'Upgrade 1.',
          value: 'If the target has Black Rose Mark, its Pressure is reduced by an additional 15%.',
        },
        {
          name: 'Upgrade 2.',
          value: "If the target has Black Rose Mark, its Dodge is reduced by an additional 15%.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Combo Three: Fallen Black Rose',
          value: 'Single Target',
        },
        {
          name: ' ',
          value: "Performs a punch in a rising spiral that deals DMG equal to 492% of ATK to the nearest target. If the target has Black Rose Mark, this DMG is increased by 50% and the fighter recovers 10% of missing HP.",
        },
        {
          name: 'Upgrade 1.',
          value: "Increases recovered HP to 20% of lost HP.",
        },
        {
          name: 'Upgrade 2.',
          value: "If the target has Black Rose Mark, increases DMG by 80%.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Passive: Charming Punch',
          value: ' ',
        },
        {
          name: ' ',
          value: "Trigger Skill: When dealing DMG with the skill, if the target has Black Rose Mark, Charming Punch is triggered after the skill ends, dealing DMG equal to 448% of ATK to a single target. Trigger intervals: 12s.",
        },
        {
          name: 'Upgrade 1.',
          value: "Increases Charming Punch DMG to 492% of ATK.",
        },
        {
          name: 'Upgrade 2.',
          value: "Gains Super Armor while performing Charming Punch.",
        },
        {
          name: 'Upgrade 3.',
          value: "Each strike of Charming Punch has a 10% base chance to Stun for 2s.",
        },
        {
          name: 'Super Armor',
          value: "Cannot be knocked back.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~cdudley2',
      },
    };
  message.channel.send({ embeds: [TwoEmbed] })
}};
