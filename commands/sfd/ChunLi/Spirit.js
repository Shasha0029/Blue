const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "chunli3",
    description: "Sfd Chun-Li Spirit",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

    const ThreeEmbed = {
      color: 0x0099ff,
      title: 'Chun-Li',
      description: 'Heavenly Kicks',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094123575994228787/chun-li-icon.png',
      },
      fields: [
        {
          name: 'Dragon Wrist Spikes (+30)',
          value: 'Combat Power: 98k',
        },
        {
          name: ' ',
          value: 'HP + 21%',
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
          value: 'Crit Rate + 9%',
          inline: true,
        },
        {
          name: 'Skill Upgrade: Whirlwind',
          value: "Whirlwind replaces Senretsukyaku. Strike multiple targets 2 times, dealing DMG to each target equal to 250% of ATK. Strike the nearest enemy with 5 kicks, dealing DMG equal to 650% of ATK. If the target has Armor Break, each stack of Armor Break increases DMG by 4%.",
        },
        {
          name: '+5',
          value: "Assist Skill: Effective when a fighter is in an assist position. Assist Fighters receive 15% of Chun-Li's Crit. ",
        },
        {
          name: '+10',
          value: "Increases DMG Bonus of each stack of Armor Break to 5%.",
        },
        {
          name: '+20',
          value: "Whirlwind grants all teammates 50 Speed and increases the whole team's Super Combo Gauge progress gained from regular attacks by 100% for 15s.",
        },
        {
          name: '+30',
          value: "Each Crit triggered by Whirlwind fills the Super Combo Gauge by an additional 30.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~chunli3',
      },
    };
  message.channel.send({ embeds: [ThreeEmbed] })
}};
