const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "combatguile",
    alias: "cguile",
    description: "Sfd Combat Guile",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const OneEmbed = {
      color: 0x0099ff,
      title: 'Combat Guile',
      description: 'Fearless Soilder',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094128643539742810/combat-guile-icon.png',
      },
      fields: [
        {
          name: 'Rarity: ',
          value: 'A',
          inline: true,
        },
        {
          name: 'Speed: ',
          value: '104',
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
          value: 'Thunder',
          inline: true,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~cguile1',
      },
    };

    const TwoEmbed = {
      color: 0x0099ff,
      title: 'Combat Guile',
      description: 'Fearless Soilder',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094128643539742810/combat-guile-icon.png',
      },
      fields: [
        {
          name: 'Super: Saber Bow',
          value: 'AoE',
        },
        {
          name: ' ',
          value: "Charges up for a penetrating sonic wave that delivers a heavy hit to all enemies for Thunder DMG equal to 310% of ATK. There is also a 20% chance to dispel 1 enemy buff.",
        },
        {
          name: 'Upgrade 1.',
          value: "Increases DMG to 357% of ATK.",
        },
        {
          name: 'Upgrade 2.',
          value: "If the target is inflicted with Shock, the DMG is increased by 20%.",
        },
        {
          name: 'Shock',
          value: "Target takes Thunder DMG equal to 10% of ATK for each attack received for 6s. Stacks up to 10 times.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Combo Two: Guerilla Bow',
          value: 'AoE',
        },
        {
          name: ' ',
          value: "Fully draws the bow for a heavy hit to all enemies. This deals Thunder DMG equal to 260% of ATK, with a 50% chance to dispel 1 enemy buff.",
        },
        {
          name: 'Upgrade 1.',
          value: 'Obtains Super Armor while performing this skill.',
        },
        {
          name: 'Upgrade 2.',
          value: "Increases DMG to 286% of ATK and the chance to dispel to 70%.",
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
          name: 'Combo Three: Army Knife Boom Chain',
          value: 'Single Target',
        },
        {
          name: ' ',
          value: "Unleashes multiple Saber waves that strike 1 target 9 times, dealing Thunder DMG equal to 805% of ATK in total.",
        },
        {
          name: 'Upgrade 1.',
          value: "If the target is inflicted with Shock, the DMG is increased by 20%.",
        },
        {
          name: 'Upgrade 2.',
          value: "The last 2 strikes deal additional Thunder DMG equal to 10% of the fighter's current HP, up to 70% of ATK.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Passive: Spec Ops Blade',
          value: ' ',
        },
        {
          name: ' ',
          value: "When dispelling, there's a 30% chance to deal additional Thunder DMG equal to 10% of current HP, up to 70% of ATK.",
        },
        {
          name: 'Upgrade 1.',
          value: "When dealing additional DMG, there's a 100% base chance to inflict 1x Shock.",
        },
        {
          name: 'Upgrade 2.',
          value: "When dispelling, there's a 50% chance to deal additional DMG.",
        },
        {
          name: 'Upgrade 3.',
          value: "Increases the additional DMG to 15% of current HP, up to 105% of ATK.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~cguile2',
      },
    };

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
  message.channel.send({ embeds: [OneEmbed] })
    message.channel.send({ embeds: [TwoEmbed] })
      message.channel.send({ embeds: [ThreeEmbed] })
}};
