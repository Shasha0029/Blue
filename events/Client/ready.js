const client = require("../../blue");
const colors = require("colors");

module.exports = {
  name: "ready.js"
};

client.once('ready', async () => {
  console.log("\n" + `[READY] ${client.user.tag} is up and ready to go.`.brightCyan);
  console.log(`Connected to the following:`.brightBlue);
  client.guilds.cache.forEach((guild) => {
    console.log(` - `+guild.name);
  })
})
