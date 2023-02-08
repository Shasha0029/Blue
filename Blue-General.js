//Discord.js must be installed using npm install discord.js
const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");
const config = require("./config.json");
const prefix = "~";
//For Custom Commands.
const Xa = "342870465796374539";
//For To-do List.
const todo = "Things which need to be worked on:\n";
const mid = "637263562376609792"; //message ID
const tdid = "637263484144320523"; //channel ID
//For Suggestions.
const sid = "637287096138203157"; //channel ID


client.on("ready", () => {
	console.log("Connected to the following:");
	client.user.setActivity("upon the clouds.");
 	client.guilds.cache.forEach((guild) => {
    console.log(" - " + guild.name);
 })
});

client.on("message", (message) => {
 if (!message.content.startsWith(prefix) || message.author.bot) return;
 const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();

//Ask for help, get help.
if (command === "help") {
	message.channel.send({embed: {
		color: 3447003,
		title: "Did someone ask for help?",
		fields: [{
			name: "Your prefix is " + config.prefix,
		 value: "__**Say [message]**__\n - Repeats what is said\n\n__**Bigtext [message]**__\n - Makes text bigger with emoji\n\n__**Alt [message]**__\n - Different font\n\n__**Ping**__\n - Erm... Pong?\n\n__**Reverse [message]**__\n - Repeats what you said but backwards\n\n__**8ball**__\n - Ask the magic 8ball anything\n\n__**Flip**__\n - Flips a coin\n\n__**Announce [Channel] [Message]**__\n - Allias = An\n - Sends message to the mentioned channel\n\n__**Addtodo [message]**__\n - Adds idea to Xa's todo list"	}]
		}});
} else


//-------To-do List Section-------
//Edits the to-do list.
if (command === "addtodo" && message.author.id === Xa) {
 var Add = message.content.slice(9);
  message.channel.send("Done Sir :two_hearts:");
   let list = client.channels.get(tdid);
   	list.fetchMessage(mid)
 .then(message => {message.edit(message.content+"\n- "+Add);
});} else
//Says what's being worked on.
if (command === "todo") {
 let list = client.channels.get(tdid);
	 list.fetchMessage(mid).then(msg => {
		message.channel.send(msg.content);
});} else
//Sets to-do list back to default.
if (command === "reset" && message.author.id === Xa) {
 message.channel.fetchMessage(mid)
 .then(message => {message.edit(todo);
});} else


//Suggestions Section
if (command === "suggest") {
	client.channels.get(sid).send({embed: {
		color: 3447003,
		title: "New Suggestion",
		fields: [{
			name: "By "+message.author,
		 value: message.content	.slice(9)}]
		}});
} else

//Xabian's commands:
if (command === "end" && message.author.id === Xa) {
	client.destroy();
} else

//---------Random Section---------
//Sends the message to a channel mentioned.
if (command === "an" || command === "announce") {
	const channel = args.shift().slice(2,-1);
	const sayMessage = args.join(` `);
	client.channels.cache.get(channel).send(sayMessage);
} else {
	if (sayMessage = null) return;
}
//Picks a random 8ball response and outputs it.
if (command === "8ball") {
	let temp = message.content.slice(7);
	if (temp.length > 2) {
	var choices = ["It is certain","Don't count on it","My reply is no","Very doubtful","Cannot predict now","Outlook isn't good","It is decidedly so","Better not tell you now","Concentrate and ask again","You may rely on it","Reply hazy, try again","Most likely"];
 var response = choices[Math.floor(Math.random()*choices.length)];
 message.channel.send(response);
} else {
	if (temp = null) return;
}}
//Flips a coin.
if (command === "flip") {
	var choices1 = ["Heads","Tails"];
	var response1 = choices1[Math.floor(Math.random()*choices1.length)];
	message.channel.send(response1);
} else
//Says the ping.
if (command === "ping") {
	message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
} else
//Repeats what has been said and removes the message.
if (command === "say") {
	var str = message.content.slice(4);
	message.delete();
	message.channel.send(str);
} else
//Spam
if (command === "rip") {
	let temp = message.content.slice(5);
	if (temp.length > 6) {
		message.channel.send("~rip " + temp);
} else {
	if (temp < 6) {
		message.channel.send("You need to specify a person");
}}}


//-------Text Alter Section-------
//Reverses text.
if (command === "reverse") {
	var text = message.content.substring(1).slice(8).replace(/\?/gi, "¿");
	var reversed = "";
	var i = text.length;
	while (i > 0) {
		reversed += text.substring(i - 1, i);
		i--;
		}
		message.channel.send(reversed);
	} else
//Converts text to a different font.
if (command === "alt") {
 var str = message.content.slice(4);
 	str = str.replace(/a/gi, "𝔞");
 	str = str.replace(/b/gi, "𝔟");
 	str = str.replace(/c/gi, "𝔠");
 	str = str.replace(/d/gi, "𝔡");
 	str = str.replace(/e/gi, "𝔢");
 	str = str.replace(/f/gi, "𝔣");
 	str = str.replace(/g/gi, "𝔤");
 	str = str.replace(/h/gi, "𝔥");
 	str = str.replace(/i/gi, "𝔦");
 	str = str.replace(/j/gi, "𝔧");
 	str = str.replace(/k/gi, "𝔨");
 	str = str.replace(/l/gi, "𝔩");
 	str = str.replace(/m/gi, "𝔪");
 	str = str.replace(/n/gi, "𝔫");
 	str = str.replace(/o/gi, "𝔬");
 	str = str.replace(/p/gi, "𝔭");
 	str = str.replace(/q/gi, "𝔮");
 	str = str.replace(/r/gi, "𝔯");
 	str = str.replace(/s/gi, "𝔰");
 	str = str.replace(/t/gi, "𝔱");
 	str = str.replace(/u/gi, "𝔲");
 	str = str.replace(/v/gi, "𝔳");
 	str = str.replace(/w/gi, "𝔴");
 	str = str.replace(/x/gi, "𝔵");
 	str = str.replace(/y/gi, "𝔶");
 	str = str.replace(/z/gi, "𝔷");
	message.channel.send(str);
} else
//Converts text to emoji writing.
if (command === "bigtext") {
	var str = message.content.slice(8);
 		str = str.replace(/a/gi, "𝔞");
 		str = str.replace(/b/gi, "𝔟");
 		str = str.replace(/c/gi, "𝔠");
 		str = str.replace(/d/gi, "𝔡");
 		str = str.replace(/e/gi, "𝔢");
 		str = str.replace(/f/gi, "𝔣");
 		str = str.replace(/g/gi, "𝔤");
 		str = str.replace(/h/gi, "𝔥");
 		str = str.replace(/i/gi, "𝔦");
 		str = str.replace(/j/gi, "𝔧");
 		str = str.replace(/k/gi, "𝔨");
 		str = str.replace(/l/gi, "𝔩");
 		str = str.replace(/m/gi, "𝔪");
 		str = str.replace(/n/gi, "𝔫");
 		str = str.replace(/o/gi, "𝔬");
 		str = str.replace(/p/gi, "𝔭");
 		str = str.replace(/q/gi, "𝔮");
 		str = str.replace(/r/gi, "𝔯");
 		str = str.replace(/s/gi, "𝔰");
 		str = str.replace(/t/gi, "𝔱");
 		str = str.replace(/u/gi, "𝔲");
 		str = str.replace(/v/gi, "𝔳");
 		str = str.replace(/w/gi, "𝔴");
 		str = str.replace(/x/gi, "𝔵");
 		str = str.replace(/y/gi, "𝔶");
 		str = str.replace(/z/gi, "𝔷");
 		str = str.replace(/𝔞/gi, ":regional_indicator_a:");
 		str = str.replace(/𝔟/gi, ":regional_indicator_b:");
 		str = str.replace(/𝔠/gi, ":regional_indicator_c:");
 		str = str.replace(/𝔡/gi, ":regional_indicator_d:");
 		str = str.replace(/𝔢/gi, ":regional_indicator_e:");
 		str = str.replace(/𝔣/gi, ":regional_indicator_f:");
 		str = str.replace(/𝔤/gi, ":regional_indicator_g:");
 		str = str.replace(/𝔥/gi, ":regional_indicator_h:");
 		str = str.replace(/𝔦/gi, ":regional_indicator_i:");
 		str = str.replace(/𝔧/gi, ":regional_indicator_j:");
 		str = str.replace(/𝔨/gi, ":regional_indicator_k:");
 		str = str.replace(/𝔩/gi, ":regional_indicator_l:");
 		str = str.replace(/𝔪/gi, ":regional_indicator_m:");
 		str = str.replace(/𝔫/gi, ":regional_indicator_n:");
 		str = str.replace(/𝔬/gi, ":regional_indicator_o:");
 		str = str.replace(/𝔭/gi, ":regional_indicator_p:");
 		str = str.replace(/𝔮/gi, ":regional_indicator_q:");
 		str = str.replace(/𝔯/gi, ":regional_indicator_r:");
 		str = str.replace(/𝔰/gi, ":regional_indicator_s:");
 		str = str.replace(/𝔱/gi, ":regional_indicator_t:");
 		str = str.replace(/𝔲/gi, ":regional_indicator_u:");
 		str = str.replace(/𝔳/gi, ":regional_indicator_v:");
 		str = str.replace(/𝔴/gi, ":regional_indicator_w:");
 		str = str.replace(/𝔵/gi, ":regional_indicator_x:");
 		str = str.replace(/𝔶/gi, ":regional_indicator_y:");
 		str = str.replace(/𝔷/gi, ":regional_indicator_z:");
 		str = str.replace(/0/gi, ":zero:");
 		str = str.replace(/1/gi, ":one:");
 		str = str.replace(/2/gi, ":two:");
 		str = str.replace(/3/gi, ":three:");
 		str = str.replace(/4/gi, ":four:");
 		str = str.replace(/5/gi, ":five:");
 		str = str.replace(/6/gi, ":six:");
 		str = str.replace(/7/gi, ":seven:");
 		str = str.replace(/8/gi, ":eight:");
 		str = str.replace(/9/gi, ":nine:");
 		str = str.replace(/\!/gi, ":exclamation:");
 		str = str.replace(/\?/gi, ":question:");
 	message.channel.send(str);
 }
});
client.login(config.token);
