const { EmbedBuilder } = require("discord.js");

module.exports = {
  config: {
    name: "bzangief3",
    alias: "bzan3",
    description: "Sfd Beast Zangief Spirit",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config, db) => {

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
  message.channel.send({ embeds: [ThreeEmbed] })
}};
