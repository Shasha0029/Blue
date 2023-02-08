//Discord.js must be installed using npm install discord.js
const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");
const prefix = ('~');
const sl = "775319103187189800"; //update channel

client.login(config.token)

client.on("ready", () => {
	console.log("Online and ready~ <3");
	client.user.setActivity("upon the clouds.");
});

client.on("message", (message) => {
 if (!message.content.startsWith(prefix)) return;
 const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();
 const cmd = message.content.toLowerCase(); 
 
if (command === "start") {
 message.channel.send("Welcome to the test rpg");
 client.channels.get(sl).send("~newuser " + message.author.id)
} else

if (command === "newuser") {
 let tmp = message.content.slice(9)
 message.guild.createChannel(tmp, "text");
}
});
