const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "say", // Name of Command
        description: "Repeats what's said", // Command Description
        usage: "Say [respones]" // Command usage
    },
    permissions: ['SendMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
      if (!args[0]) return message.reply({ embeds: [
        new EmbedBuilder()
          .setTitle("Missing argument")
          .setDescription("You must give me something to say")
      ]});

      const response = message.content.slice(4);

      return message.channel.send(response);// execute
    },
};
