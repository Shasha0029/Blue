const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "cammy",
    description: "Sfd Cammy",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const OneEmbed = {
      color: 0x0099ff,
      title: 'Cammy',
      description: 'Killer Bee',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094115835439747133/Screen-Shot-2023-03-13-at-2.32.01-AM.png',
      },
      fields: [
        {
          name: 'Rarity: ',
          value: 'A',
          inline: true,
        },
        {
          name: 'Speed: ',
          value: '123',
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
        text: '~cammy1',
      },
    };

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

    const ThreeEmbed = {
      color: 0x0099ff,
      title: 'Cammy',
      description: 'Killer Bee',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094115835439747133/Screen-Shot-2023-03-13-at-2.32.01-AM.png',
      },
      fields: [
        {
          name: 'Poison Bee Crown (+30)',
          value: 'Combat Power: 99k',
        },
        {
          name: ' ',
          value: 'HP + 15%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Atk + 18%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Crit Rate + 8%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Dodge + 6%',
          inline: true,
        },
        {
          name: 'Skill Upgrade: Stinger',
          value: "Fusilli Smash replaces Cannon Strike. Strikes an enemy 7 times, dealing DMG equal to 1,104% of ATK. Meanwhile, deals DMG equal to 5% of the target's current HP but no more than (8% of fighter's own ATK x the target's number of Armor Break stacks).",
        },
        {
          name: '+5',
          value: "Assist Skill: Takes effect when the fighter is in an assist position. When the battle begins or when the assisted fighter performs a Trigger Skill, kick the enemy target in the front position 4 times to deal DMG equal to 120% of ATK, inflicting 1x Armor Break.",
        },
        {
          name: '+10',
          value: "Fusilli Smash cannot be interrupted.",
        },
        {
          name: '+20',
          value: "Increases the bonus DMG to (12% x the fighter's ATK x enemy's Armor Break stack count)",
        },
        {
          name: '+30',
          value: "If the enemy has 10x Armor Break, Fusilli Smash deals an additional 20% DMG.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~cammy3',
      },
    };
  message.channel.send({ embeds: [OneEmbed] })
    message.channel.send({ embeds: [TwoEmbed] })
      message.channel.send({ embeds: [ThreeEmbed] })
}};
