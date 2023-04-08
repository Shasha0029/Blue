const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "adonis",
    description: "Sfd Adonis",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const OneEmbed = {
      color: 0x0099ff,
      title: 'Adonis',
      description: 'Emperor of Muay Thai',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094092397954203809/adon-icon.png',
      },
      fields: [
        {
          name: 'Rarity: ',
          value: 'A',
          inline: true,
        },
        {
          name: 'Speed: ',
          value: '112',
          inline: true,
        },
        {
          name: 'Type: ',
          value: 'Agility',
          inline: true,
        },
        {
          name: 'Class: ',
          value: 'Balanced',
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
        text: '~adonis1',
      },
    };

    const TwoEmbed = {
      color: 0x0099ff,
      title: 'Adonis',
      description: 'Emperor of Muay Thai',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094092397954203809/adon-icon.png',
      },
      fields: [
        {
          name: 'Super: Jaguar Avalanche',
          value: 'Single Target',
        },
        {
          name: ' ',
          value: "Strikes the nearest target 4 times swiftly, dealing DMG equal to 625% of ATK in total. The final blow has a 100% chance to inflict 1x Bleed.",
        },
        {
          name: 'Upgrade 1.',
          value: 'If the target has Hatred Mark, the first 3 strikes have a 30% chance to inflict 1x Bleed.',
        },
        {
          name: 'Upgrade 2.',
          value: "Increases DMG to 688% of ATK. If the target has Hatred Mark, the chance to inflict Bleed is increased to 45%.",
        },
        {
          name: 'Bleed',
          value: "Loses HP equal to 1% of max HP per second, up to 10% of ATK. The effect lasts for 10s and stacks up to 3 times.",
        },
        {
          name: 'Hatred Mark',
          value: "DMG dealt to the marked unit is increased by 20% and ignores 20% Dodge. Lasts 12s.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Combo One: Thousand Jaguars',
          value: 'Single Target',
        },
        {
          name: ' ',
          value: "Swiftly strikes the nearest target 9 times, dealing DMG equal to 590% of ATK. The 1st strike inflicts Hatred Mark on the target.",
        },
        {
          name: 'Upgrade 1.',
          value: 'If the target is already affected by Hatred Mark, increases DMG by 20%.',
        },
        {
          name: 'Upgrade 2.',
          value: "If the target carries Grave Injury, increases DMG by an additional 20%.",
        },
        {
          name: 'Grave Injury',
          value: "Decreases healing received by 10% and increases Bleed DMG by 10% for 20s. Stacks up to 5 times.",
        },
        {
          name: 'Hatred Mark',
          value: "DMG dealt to the marked unit is increased by 20% and ignores 20% Dodge. Lasts 12s.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Combo Two: Jaguar Attack',
          value: 'Single Target',
        },
        {
          name: ' ',
          value: "Quickly strikes the nearest target 4 times, dealing DMG equal to 627% of ATK.",
        },
        {
          name: 'Upgrade 1.',
          value: "There's a 100% chance to inflict 1x Grave Injury on the marked target.",
        },
        {
          name: 'Upgrade 2.',
          value: "Increases DMG to 690% of ATK. There's a 50% chance to additionally inflict 1x Grave Injury.",
        },
        {
          name: 'Grave Injury',
          value: "Decreases healing received by 10% and increases Bleed DMG by 10% for 20s. Stacks up to 5 times.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Passive: Jaguar Assault',
          value: ' ',
        },
        {
          name: ' ',
          value: "Counterattacks when taking melee hits, dealing DMG equal to 207% of ATK and inflicting Hatred Mark on the attacker. Trigger interval: 15s.",
        },
        {
          name: 'Upgrade 1.',
          value: "Increases Counterattack DMG to 238% of ATK.",
        },
        {
          name: 'Upgrade 2.',
          value: "Trigger interval: 10s.",
        },
        {
          name: 'Upgrade 3.',
          value: "Counterattacks have an 80% chance to inflicted 1x Bleed.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~adonis2',
      },
    };

    const ThreeEmbed = {
      color: 0x0099ff,
      title: 'Adonis',
      description: 'Emperor of Muay Thai',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094092397954203809/adon-icon.png',
      },
      fields: [
        {
          name: 'Jaguar Shoulder Blade (+30)',
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
          value: 'Pressure + 6%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Dodge + 6%',
          inline: true,
        },
        {
          name: 'Skill Upgrade: Jaguar Boxer',
          value: "Adon's Crit DMG is increased by 25% for each Hatred Mark that exists.",
        },
        {
          name: '+5',
          value: "Assist Skill: Takes effect when the fighter is in an assist position. When an allied fighter is knocked out, the assisted fighter inflicts the enemy that delivers the killing blow with Hatred Mark, lasting until the target dies. When the assisted fighter deals DMG to the marked unit, they receive 18% of Adon's ATK as a bonus. Hatred Mark cannot be dispelled.",
        },
        {
          name: '+10',
          value: "Crit DMG of other allied fighters is increased by 10% for each Hatred Mark that exists.",
        },
        {
          name: '+20',
          value: "Each Hatred Mark increases Adon's Crit DMG by 35% and that of other allied fighters by 15%.",
        },
        {
          name: '+30',
          value: "Other allied fighters deal 20% increased DMG to targets with Hatred Mark.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~adonis3',
      },
    };
  message.channel.send({ embeds: [OneEmbed] })
    message.channel.send({ embeds: [TwoEmbed] })
      message.channel.send({ embeds: [ThreeEmbed] })
}};
