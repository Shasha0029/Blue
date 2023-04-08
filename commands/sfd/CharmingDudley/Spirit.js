const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "charmingdudley3",
    alias: "cdudley3",
    description: "Sfd Charming Dudley Stats",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

    const ThreeEmbed = {
      color: 0x0099ff,
      title: 'Charming Dudley',
      description: '*Charming*',
      thumbnail: {
        url: 'https://cdn.discordapp.com/attachments/1094033382708629544/1094119177477951508/charming-dudley-icon.png',
      },
      fields: [
        {
          name: 'Charming Rose (+30)',
          value: 'Combat Power: 98k',
        },
        {
          name: ' ',
          value: 'HP + 24%',
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
          value: 'Pressure + 6%',
          inline: true,
        },
        {
          name: 'Skill Upgrade: Charming Rose',
          value: "Uses Fragmented Rose (Lv. 3) once upon entering the battle. This is considered a Trigger Skill.",
        },
        {
          name: '+5',
          value: "Assist Skill: Takes effect when the fighter is in an assist position. When the assisted fighter performs a Super Combo or Combo, they throw a Black Rose at the frontmost enemy fighter, dealing DMG equal 80% of ATK and inflicting Black Rose Mark on the target. ",
        },
        {
          name: '+10',
          value: "When a target with Black Rose Mark dies, the Black Rose Mark is transferred to the frontmost enemy fighter.",
        },
        {
          name: '+20',
          value: "When a target with Black Rose Mark dies, the Black Rose Mark is transferred to all enemies.",
        },
        {
          name: '+30',
          value: "Fallen Black Rose refreshes the duration of Black Rose Mark on the target.",
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: '~cdudley3',
      },
    };
  message.channel.send({ embeds: [ThreeEmbed] })
}};
