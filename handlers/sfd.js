const fs = require("fs");
const colors = require("colors");

module.exports = (client, config) => {
  console.log("0------------------| Street Fighter Handler:".blue);

  fs.readdirSync('./commands/sfd/').forEach(dir => {
    const commands = fs.readdirSync(`./commands/sfd/${dir}`).filter(file => file.endsWith('.js'));
    for (let file of commands) {

      let pull = require(`../commands/sfd/${dir}/${file}`);
      if (pull.config.name) {
        client.prefix_commands.set(pull.config.name, pull);
        console.log(`[HANDLER - Street Fighter] Loaded a file: ${pull.config.name} (#${client.prefix_commands.size})`.brightGreen)
      } else {
        console.log(`[HANDLER - Street Fighter] Couldn't load the file ${file}, missing module name value.`.red)
        continue;
      };

    };
  });
};
