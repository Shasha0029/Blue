const { EmbedBuilder } = require("discord.js");
const fs = require('fs');

module.exports = {
  config: {
    name: "help",
    description: "Replies with help menu.",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix) => {
    const commands = fs.readdirSync('./commands/prefix/General').filter(file => file.endsWith('.js'));
    const info = fs.readdirSync('./commands/prefix/Info').filter(file => file.endsWith('.js'));
    return message.reply(
      {
        embeds: [
          new EmbedBuilder()
            .setAuthor(
              {
                name: client.user.tag,
                iconURL: client.user.displayAvatarURL(
                  {
                    dynamic: true
                  }
                )
              }
            )
            .setDescription(commands.join('\n')+'\n'+info.join('\n'))
            .setFooter(
              {
                text: `→ Use ${prefix}info for a command info.`
              }
            )
            .setColor('Blue')
        ]
      }
    );

  },
};
