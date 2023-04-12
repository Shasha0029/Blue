const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "charmingdudley",
    aliases: "cdudley",
    description: "Sfd Charming Dudley",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const OneEmbed = {
      color: 0x0099ff,
      title: 'Charming Dudley',
      description: '*Charming*',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094119177477951508/charming-dudley-icon.png',
      },
      fields: [
        {
          name: 'Rarity: ',
          value: 'A',
          inline: true,
        },
        {
          name: 'Speed: ',
          value: '107',
          inline: true,
        },
        {
          name: 'Type: ',
          value: 'Tech',
          inline: true,
        },
        {
          name: 'Class: ',
          value: 'Balanced',
          inline: true,
        },
        {
          name: 'Faction: ',
          value: 'Thunder',
          inline: true,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~cdudley1',
      },
    };

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

    const ThreeEmbed = {
      color: 0x0099ff,
      title: 'Charming Dudley',
      description: '*Charming*',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094119177477951508/charming-dudley-icon.png',
      },
      fields: [
        {
          name: 'Charming Rose (+30)',
          value: 'Combat Power: 98k',
        },
        {
          name: ' ',
          value: 'HP + 24%',
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
          value: 'Pressure + 6%',
          inline: true,
        },
        {
          name: 'Skill Upgrade: Charming Rose',
          value: "Uses Fragmented Rose (Lv. 3) once upon entering the battle. This is considered a Trigger Skill.",
        },
        {
          name: '+5',
          value: "Assist Skill: Takes effect when the fighter is in an assist position. When the assisted fighter performs a Super Combo or Combo, they throw a Black Rose at the frontmost enemy fighter, dealing DMG equal 80% of ATK and inflicting Black Rose Mark on the target. ",
        },
        {
          name: '+10',
          value: "When a target with Black Rose Mark dies, the Black Rose Mark is transferred to the frontmost enemy fighter.",
        },
        {
          name: '+20',
          value: "When a target with Black Rose Mark dies, the Black Rose Mark is transferred to all enemies.",
        },
        {
          name: '+30',
          value: "Fallen Black Rose refreshes the duration of Black Rose Mark on the target.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~cdudley3',
      },
    };
  message.channel.send({ embeds: [OneEmbed] })
    message.channel.send({ embeds: [TwoEmbed] })
      message.channel.send({ embeds: [ThreeEmbed] })
}};
