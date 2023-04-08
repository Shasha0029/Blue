const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "abel3",
    description: "Sfd Abel Spirit",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

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
  message.channel.send({ embeds: [ThreeEmbed] })
}};
