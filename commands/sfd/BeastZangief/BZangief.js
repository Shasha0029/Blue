const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "bzangief",
    aliases: "bzan",
    description: "Sfd Beast Zangief",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const OneEmbed = {
      color: 0x0099ff,
      title: 'Beast Zangief',
      description: 'Warrior of Winter',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094111666020548638/beast-zangief-icon.png',
      },
      fields: [
        {
          name: 'Rarity: ',
          value: 'A',
          inline: true,
        },
        {
          name: 'Speed: ',
          value: '116',
          inline: true,
        },
        {
          name: 'Type: ',
          value: 'Power',
          inline: true,
        },
        {
          name: 'Class: ',
          value: 'Balanced',
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
        text: '~bzangief1',
      },
    };

    const TwoEmbed = {
      color: 0x0099ff,
      title: 'Beast Zangief',
      description: 'Warrior of Winter',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094111666020548638/beast-zangief-icon.png',
      },
      fields: [
        {
          name: 'Super: Wind Wolf Assault ',
          value: 'Single Target',
        },
        {
          name: ' ',
          value: "Unleashes a deafening roar and attacks swiftly with claws. Strikes the nearest target 2 times, dealing DMG equal to 587% of ATK in total. Gains 20% Speed for 8s once the skill initiates.",
        },
        {
          name: 'Upgrade 1.',
          value: 'Increases DMG to 646% of ATK. Duration of the Speed bonus extended to 12s.',
        },
        {
          name: 'Upgrade 2.',
          value: "Increases the Speed of other teammates by 10% for 12s.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Combo One: Beast Smash',
          value: 'AoE',
        },
        {
          name: ' ',
          value: "Unleashes a deafening roar at opponents. Strikes the nearest target 3 times, dealing DMG equal to 383% of ATK in total. The final blow has a 50% chance to inflict 1x Bleed.",
        },
        {
          name: 'Upgrade 1.',
          value: '100% chance to inflict 1x Bleed against targets with Grave Injury.',
        },
        {
          name: 'Upgrade 2.',
          value: "Each point of extra Speed increases this skill's DMG by 0.5%, stacking up to 200% of the skill's original DMG. The final blow now has a 100% chance to inflict 1x Bleed.",
        },
        {
          name: 'Bleed',
          value: "Loses HP equal to 1% of max HP per second, up to 10% of ATK. The effect lasts for 10s and stack up to 3 times.",
        },
        {
          name: 'Grave Injury',
          value: "Decreases healing received by 10% and increases Bleed DMG by 10% for 10s. Stacks up to 5 times.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Combo Two: Wild Beast Spin',
          value: 'AoE',
        },
        {
          name: ' ',
          value: "Spins into a tornado that strikes each target within range 7 times, dealing DMG equal to 455% of ATK to each target. Each strike has a 10% base chance to Stun the target for 1s.",
        },
        {
          name: 'Upgrade 1.',
          value: "DMG increases to 525% of ATK.",
        },
        {
          name: 'Upgrade 2.',
          value: "Gains Super Armor during skill use.",
        },
        {
          name: 'Super Amror',
          value: "Cannot be knocked back.",
        },
        {
    			name: '\u200b',
    			value: '\u200b',
    			inline: false,
    		},
        {
          name: 'Passive: Wild Nature',
          value: ' ',
        },
        {
          name: ' ',
          value: "When the battle begins, each point of extra Speed grants the fighter a 0.3% DMG Reduction. Stacks up to 30% and lasts until the battle ends.",
        },
        {
          name: 'Upgrade 1.',
          value: "Increases Speed by 10 for 8s at the start of battle.",
        },
        {
          name: 'Upgrade 2.',
          value: "When the battle begins, each point of extra Speed grants the fighter/other Wind Faction teammates 0.4%/0.2% DMG reduction. Stacks up to 40%/20% and lasts until the battle ends.",
        },
        {
          name: 'Upgrade 3.',
          value: "When the battle begins, the fighter gains 50 Speed for 8s.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~bzangief2',
      },
    };

    const ThreeEmbed = {
      color: 0x0099ff,
      title: 'Beast Zangief',
      description: 'Warrior of Winter',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094111666020548638/beast-zangief-icon.png',
      },
      fields: [
        {
          name: 'Wolf King Atomic Armor (+30)',
          value: 'Combat Power: 98k',
        },
        {
          name: ' ',
          value: 'HP + 21%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Atk + 18%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Def + 12%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Effect Accuracy + 12%',
          inline: true,
        },
        {
          name: 'Skill Upgrade: Wolf King',
          value: "Regular attacks additional trigger a Stomp that deals DMG equal to 120% of ATK with a 30% base chance to Stun the target for 2s.",
        },
        {
          name: '+5',
          value: "Assist Skill: Effective when fighter is in an assist position. When the battle begins, strikes multiple targets within range 7 times, dealing DMG equal to 128% of ATK to each one of them. Increases Speed of all allied fighters by 20 for 8s after the skill is used.",
        },
        {
          name: '+10',
          value: "When Stomp triggers, the fighter recovers HP equal to 60% of ATK.",
        },
        {
          name: '+20',
          value: "Stomp now affects all enemies within range, and its DMG is increased to 180% of ATK.",
        },
        {
          name: '+30',
          value: "Removes the Control effect inflicted on the fighter immediately and triggers King of the Beasts Spin, striking all targets within range 8 times and dealing 300% DMG to each of them. While performing this attack, the fighter gains Super Armor. Trigger interval: 15s.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~bzangief3',
      },
    };
  message.channel.send({ embeds: [OneEmbed] })
    message.channel.send({ embeds: [TwoEmbed] })
      message.channel.send({ embeds: [ThreeEmbed] })
}};
