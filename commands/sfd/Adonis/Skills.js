const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "adonis2",
    description: "Sfd Adonis Skills",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

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
  message.channel.send({ embeds: [TwoEmbed] })
}};
