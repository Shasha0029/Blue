const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "abel",
    description: "Sfd Abel Stats",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {
    const OneEmbed = {
      color: 0x0099ff,
      title: 'Abel',
      description: 'Man with no past',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094033418012069969/image0.png',
      },
      fields: [
        {
          name: 'Rarity: ',
          value: 'A',
          inline: true,
        },
        {
          name: 'Speed: ',
          value: '101',
          inline: true,
        },
        {
          name: 'Type: ',
          value: 'Power',
          inline: true,
        },
        {
          name: 'Class: ',
          value: 'Tank',
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
        text: '~abel1',
      },
    };

    const TwoEmbed = {
      color: 0x0099ff,
      title: 'Abel',
      description: 'Man with no past',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094033418012069969/image0.png',
      },
      fields: [
        {
          name: 'Super: Heartless',
          value: 'Single Target',
        },
        {
          name: ' ',
          value: "Catches the nearest target and strikes it 6 times, dealing DMG equal to 546% of ATK in total. The final blow has a 15% chance to interrupt the target's action. Meanwhile, the fighter gains a shield that blocks 3 hits for 5s.",
        },
        {
          name: 'Upgrade 1.',
          value: "DMG increases to 628% of ATK."
        },
        {
          name: 'Upgrade 2.',
          value: "Provides all teammates with a shield that can block 2 hits."
        },
        {
          name: '\u200b',
          value: '\u200b',
          inline: false,
        },
        {
          name: 'Combo One: Marseilles Barge',
          value: 'Single Target',
        },
        {
          name: ' ',
          value: "A charged attack that deals DMG equal to 185% of ATK to the nearest target. Grants all teammates a shield that blocks 1 hit for 5s.",
        },
        {
          name: 'Upgrade 1.',
          value: "Gain 1x Dodge UP.",
        },
        {
          name: 'Upgrade 2.',
          value: "The shield now blocks 2 hits.",
        },
        {
          name: '\u200b',
          value: '\u200b',
          inline: false,
        },
        {
          name: 'Combo Two: Tornado Throw',
          value: 'Single Target',
        },
        {
          name: ' ',
          value: "Lifts the nearest target and hits it 4 times in a row, then throws the target into the air, dealing DMG equal to 412% ATK in total with a 25% base chance to Stun the target for 3s.",
        },
        {
          name: 'Upgrade 1.',
          value: "Gains a shield that blocks 2 hits and lasts 5s.",
        },
        {
          name: 'Upgrade 2.',
          value: "Increases DMG to 474% of ATK and the base chance to Stun the enemy to 40%.",
        },
        {
          name: '\u200b',
          value: '\u200b',
          inline: false,
        },
        {
          name: 'Passive: Man With No Past',
          value: "When this fighter's skills generate a shield, they gain White Eye.",
        },
        {
          name: 'Upgrade 1.',
          value: "White Eye stacks up to 10 times.",
        },
        {
          name: 'Upgrade 2.',
          value: "Each stack of White Eye increases DMG Rate and DMG Resist Rate by an additional 2%.",
        },
        {
          name: 'Upgrade 3.',
          value: "Each stack of White Eye additionally increases Parry Rate by 5% and Parry Power by 20% of DEF.",
        },
        {
          name: ' ',
          value: "White Eye: Gains a 5% DEF Bonus and a 3% ATK Bonus for 10s. Stacks up to 5 times.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~abel2',
      },
    };

    const ThreeEmbed = {
      color: 0x0099ff,
      title: 'Abel',
      description: 'Man with no past',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094033418012069969/image0.png',
      },
      fields: [
        {
          name: 'Animal Tenderness (+30)',
          value: 'Combat Power: 99k',
        },
        {
          name: ' ',
          value: 'HP + 24%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Atk + 15%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Def + 21%',
          inline: true,
        },
        {
          name: ' ',
          value: 'Parry Rate + 6%',
          inline: true,
        },
        {
          name: 'Skill Upgrade: Hurricane Bash',
          value: "Shields applied to teammates increase their Crit Resist by 10%. Shields applied to the fighter themselves increase their Crit Resist by 20%. Both effects last 10s and do not stack.",
        },
        {
          name: '+5',
          value: "Assist Skill: Effective when a fighter is in an assist position. At the start of battle, Assist Fighter receive 2x Shield that blocks DMG. And in the following process, Assist Fighters receive extra 1x Shield every 8s.",
        },
        {
          name: '+10',
          value: "Gains a shield that blocks 2 hits and lasts 5s when receiving Crit DMG. Trigger interval: 7s.",
        },
        {
          name: '+20',
          value: "Teammates gain a shield that blocks 2 hits and lasts 5s when receiving Crit DMG. Trigger interval: 7s.",
        },
        {
          name: '+30',
          value: "Teammates receive 1x additional stack of the shield. The fighter receives 2x additional stacks of the shield.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~abel3',
      },
    };
  message.channel.send({ embeds: [OneEmbed] })
    message.channel.send({ embeds: [TwoEmbed] })
      message.channel.send({ embeds: [ThreeEmbed] })
}};
