const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "8ball", // Name of Command
        description: "Asks the 8ball a question", // Command Description
        usage: "8ball [Question]" // Command usage
    },
    permissions: ['SendMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
      if (!args[0]) return message.reply({ embeds: [
        new EmbedBuilder()
          .setTitle("Missing argument")
          .setDescription("You must ask a question")
      ]});

      if (args[0].length > 5) return message.reply({ embeds: [
        new EmbedBuilder()
          .setTitle("Missing argument")
          .setDescription("Sorry, but the new prefix's length should be not over 5 characters!")
      ]})
      const choices = ["It is certain","Don't count on it","My reply is no","Very doubtful","Cannot predict now","Outlook isn't good","It is decidedly so","Better not tell you now","Concentrate and ask again","You may rely on it","Reply hazy, try again","Most likely"];
      const response = choices[Math.floor(Math.random()*choices.length)];
      const finalEmbed = new EmbedBuilder()
        .setTitle("Results")
        .setDescription(response)

      return message.reply({ embeds: [finalEmbed] });// execute
    },
};
