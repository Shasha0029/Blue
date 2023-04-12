const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "play", // Name of Command
        description: "Plays a video", // Command Description
        usage: "play [Video]" // Command usage
    },
    permissions: ['SendMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
      message.channel.send("Doesn't work")// execute
  },
};
