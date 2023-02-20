const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "kill", // Name of Command
        description: "Closes client", // Command Description
        usage: "Murder" // Command usage
    },
    permissions: "Administrator", // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
        client.destroy();
        process.exit(); // execute
    },
};
