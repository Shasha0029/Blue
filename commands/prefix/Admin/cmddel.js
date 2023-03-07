const { PermissionsBitField, Routes, REST, User, EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "cmddel", // Name of Command
        description: "Wipes / commands", // Command Description
        usage: "cmddel" // Command usage
    },
    permissions: "Administrator", // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
      console.log("0------------------| Command Deletor:".blue);
  const rest = new REST({ version: '10' }).setToken(config.Client.TOKEN || process.env.TOKEN);
      // for guild-based commands
      rest.put(Routes.applicationGuildCommands('413905636959715329', '637241022304485396'), { body: [] })
        .then(() => console.log('Successfully deleted all guild commands.'.brightGreen))
        .catch(console.error);
      // for global commands
      rest.put(Routes.applicationCommands('413905636959715329'), { body: [] })
        .then(() => console.log('Successfully deleted all application commands.'.brightGreen))
        .catch(console.error); // execute
    },
};
