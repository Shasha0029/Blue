const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");

client.on("ready", () => {
	console.log("Activated~");
});

client.on("message", (message) => {
 const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();

//Used to test the reactions.
if (message.content === "test") {
	message.react("😂");
} else

if (message.content === "") {
	message.react("😂");
} else

if (command === "rip") {
	let temp = message.content.slice(5)
	if (temp.length > 6) {
		message.channel.send("~rip " + temp);
} else {
	if (temp < 6) {
		message.channel.send("You need to specify a person");
}}}

//Lists all the guilds emoji.
if (message.content === "listemojis") {
 const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
 message.channel.send(emojiList);
} else

if(message.content === "splosion" || message.content === "Splosion" || message.content === "Blue") {
	const splosion = client.emojis.find(emoji => emoji.name === "splosion");
 message.delete();
 message.channel.send(`${splosion}`);
} else

if(message.content === "congablob" || message.content === "Congablob" || message.content === "Blue") {
	const acongablob = client.emojis.find(emoji => emoji.name === "acongablob");
 message.delete();
 message.channel.send(`${acongablob}`);
} else

if(message.content === "ban" || message.content === "Ban") {
	const BANNED = client.emojis.find(emoji => emoji.name === "BANNED");
 message.channel.send(`${BANNED}`);
} else

if (message.content === "blue" || message.content === "Blue") {
 message.react("splosion.id");
} else

//Joan's request.
if (message.content === "OAO") {
	message.react("😮");
} else

//Snow~ ❄ 
if (message.content === "snow" || message.content === "Snow") {
	message.react("❄");
}

});
client.login(config.token);
