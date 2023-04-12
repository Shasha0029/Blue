const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "todo", // Name of Command
        description: "Lists my todo list", // Command Description
        usage: "todo" // Command usage
    },
    permissions: "Administrator", // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
      const finalEmbed = new EmbedBuilder()
        .setTitle("Todo list")
        .addFields(
          {name: " ", value: "Music Player",},
          {name: " ", value: "Video Player",},
          {name: " ", value: "Ect",}
      )

      return message.reply({ embeds: [finalEmbed] });// execute

    },
};
