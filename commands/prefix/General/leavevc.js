const { EmbedBuilder } = require('discord.js');
const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
    config: {
        name: "leave", // Name of Command
        description: "Leaves vc", // Command Description
        usage: "leave" // Command usage
    },
    permissions: ['Connect'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
      //discord.js and client declaration
      const connection = getVoiceConnection(message.guild.id);
          connection.destroy()// execute
    },
};
