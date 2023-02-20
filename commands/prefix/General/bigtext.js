const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "bigtext", // Name of Command
        description: "Changes letters to emoji", // Command Description
        usage: "bigtext [respones]" // Command usage
    },
    permissions: ['SendMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
      if (!args[0]) return message.reply({ embeds: [
        new EmbedBuilder()
          .setTitle("Missing argument")
          .setDescription("You must give me something to change")
      ]});

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
      message.channel.send(str);// execute
    },
};
