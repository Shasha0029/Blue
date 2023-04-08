const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "cammy2",
    description: "Sfd Cammy Skills",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

    const TwoEmbed = {
      color: 0x0099ff,
      title: 'Cammy',
      description: 'Killer Bee',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094115835439747133/Screen-Shot-2023-03-13-at-2.32.01-AM.png',
      },
      fields: [
        {
          name: 'Super: Spiral Arrow',
          value: 'Single Target',
        },
        {
          name: ' ',
          value: "Leap into the air, then perform a corkscrew kick on the nearest enemy, striking 4 times. This deals DMG equal to 678% of ATK and inflicts 1x Armor Break",
        },
        {
          name: 'Upgrade 1.',
          value: "There's a 50% chance to additionally inflicts 1x Armor Break on the target while the fighter themselves gains 10% Crit for 10s",
        },
        {
          name: 'Upgrade 2.',
          value: "There is a 50% chance of following up with a 1 Combo Spin, which deals DMG equal to 368% of ATK.",
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
          name: 'Combo Two: Spin Drive Smasher',
          value: 'Single Target',
        },
        {
          name: ' ',
          value: "A mid-air spin strikes the nearest enemy 5 times. Deals DMG equal to 570% of ATK and inflicts 1x Armor Break.",
        },
        {
          name: 'Upgrade 1.',
          value: '50% chance of inflicting 1x additional Armor Break on the enemy.',
        },
        {
          name: 'Upgrade 2.',
          value: "100% chance of inflicting 1x additional Armor Break on the enemy. Also increases DMG to 600%.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Combo Three: Cannon Strike',
          value: 'Single Target',
        },
        {
          name: ' ',
          value: "Perform a low corkscrew kick on the nearest enemy, hitting 6 times. Deals DMG equal to 912% of ATK.",
        },
        {
          name: 'Upgrade 1.',
          value: "Each hit adds DMG equal to 5% of the enemy's current HP. The bonus DMG cannot exceed 4% of the fighter's ATK x enemy's Armor Break stack count.",
        },
        {
          name: 'Upgrade 2.',
          value: "Increases DMG to 1003% of ATK.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Passive: Combo Spin',
          value: ' ',
        },
        {
          name: ' ',
          value: "There's a 50% chance of following up a Combo with 1 Combo Spin that deals DMG equal to 368% of ATK. This is considered a Trigger Skill.",
        },
        {
          name: 'Upgrade 1.',
          value: "There's a 50% chance of inflicting 1x Armor Break.",
        },
        {
          name: 'Upgrade 2.',
          value: "Chance of follow-up increases to 70%.",
        },
        {
          name: 'Upgrade 3.',
          value: "There's a 100% chance to inflict 1x Armor Break. Increases the chance of the follow-up attack to 100%.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~cammy2',
      },
    };
  message.channel.send({ embeds: [TwoEmbed] })
}};
