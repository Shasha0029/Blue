const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "abel2",
    description: "Sfd Abel Skills",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

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
          name: 'Combo One: Marseilles Barge',
          value: 'Single Target',
        },
        {
          name: ' ',
          value: "A charged attack that deals DMG equal to 185% of ATK to the nearest target. Grants all teammates a shield that blocks 1 hit for 5s.",
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
          name: 'Passive: Man With No Past',
          value: "When this fighter's skills generate a shield, they gain White Eye.",
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
  message.channel.send({ embeds: [TwoEmbed] })
}};
