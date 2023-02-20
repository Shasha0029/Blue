const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "alt", // Name of Command
        description: "Changes what's written to alt font", // Command Description
        usage: "alt [respones]" // Command usage
    },
    permissions: ['SendMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
      if (!args[0]) return message.reply({ embeds: [
        new EmbedBuilder()
          .setTitle("Missing argument")
          .setDescription("You must give me something to change")
      ]});

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
     	message.channel.send(str);// execute
    },
};
