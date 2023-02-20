const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "flip", // Name of Command
        description: "Flips a coin", // Command Description
        usage: "Flip" // Command usage
    },
    permissions: ['SendMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
      const choices = ["Heads", "Tails"];
      const response = choices[Math.floor(Math.random()*choices.length)];
      const finalEmbed = new EmbedBuilder()
        .setTitle("Results")
        .setDescription(response)

      return message.reply({ embeds: [finalEmbed] });// execute
    },
};
