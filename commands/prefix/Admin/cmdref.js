const client = require("../../../blue");
const { PermissionsBitField, Routes, REST, User } = require('discord.js');
const fs = require("fs");
const colors = require("colors");

module.exports = {
    config: {
        name: "cmdref", // Name of Command
        description: "Refreshes Commands", // Command Description
        usage: "cmdref" // Command usage
    },
    permissions: "Administrator", // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
      console.log("0------------------| Application commands Handler:".blue);

        let commands = [];

        // Slash commands handler:
        fs.readdirSync('./commands/').forEach((dir) => {
          console.log('[!] Started reloading commands...'.yellow);
          const Commands = fs.readdirSync(`./commands/${dir}`).filter((file) => file.endsWith('.js'));
          //C:\Users\Xa\Desktop\Discord Bots\Blue\commands\slash\General ping
          //C:\Users\Xa\Desktop\Discord Bots\Blue\commands\prefix\Admin cmdref
          for (let file of Commands) {
            let pull = require(`../commands/${dir}/${file}`);

            if (pull.name, pull.description, pull.type == 1) {
              client.commands.set(pull.name, pull);
              console.log(`[HANDLER - SLASH] Loaded a file: ${pull.name} (#${client.commands.size})`.brightGreen);

              commands.push({
                name: pull.name,
                description: pull.description,
                type: pull.type || 1,
                options: pull.options ? pull.options : null,
                default_permission: pull.permissions.DEFAULT_PERMISSIONS ? pull.permissions.DEFAULT_PERMISSIONS : null,
                default_member_permissions: pull.permissions.DEFAULT_MEMBER_PERMISSIONS ? PermissionsBitField.resolve(pull.permissions.DEFAULT_MEMBER_PERMISSIONS).toString() : null
              });

            } else {
              console.log(`[HANDLER] Couldn't load the file ${file}, missing module name value, description, or type isn't 1.`.red)
              continue;
            };
          };
        });

        // Registering all the application commands:
        if (!config.Client.ID) {
          console.log("[CRASH] You need to provide your bot ID in config.js!".red + "\n");
          return process.exit();
        };

        const rest = new REST({ version: '10' }).setToken(config.Client.TOKEN || process.env.TOKEN);

        (async () => {
          console.log('[HANDLER] Started registering all the application commands.'.yellow);

          try {
            await rest.put(
              Routes.applicationCommands(config.Client.ID),
              { body: commands }
            );

            console.log('[HANDLER] Successfully registered all the application commands.'.brightGreen);
          } catch (err) {
            console.log(err);
          }
      })();
    },
};
