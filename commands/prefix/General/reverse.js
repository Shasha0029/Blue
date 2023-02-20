const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "reverse", // Name of Command
        description: "Reverses what's said", // Command Description
        usage: "Reverse [respones]" // Command usage
    },
    permissions: ['SendMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
      if (!args[0]) return message.reply({ embeds: [
        new EmbedBuilder()
          .setTitle("Missing argument")
          .setDescription("You must give me something to reverse")
      ]});

      	var text = message.content.substring(1).slice(8).replace(/\?/gi, "¿");
      	var reversed = "";
      	var i = text.length;
      	while (i > 0) {
      		reversed += text.substring(i - 1, i);
      		i--;
      		}
      		message.channel.send(reversed);// execute
    },
};
