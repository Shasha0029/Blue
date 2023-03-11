const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "join", // Name of Command
        description: "Joins a vc", // Command Description
        usage: "join" // Command usage
    },
    permissions: ['Connect'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config, db) => {
      //discord.js and client declaration
      const { joinVoiceChannel } = require('@discordjs/voice');
              joinVoiceChannel({
                  channelId: message.member.voice.channel.id,
                  guildId: message.guild.id,
                  adapterCreator: message.guild.voiceAdapterCreator
              })// execute
    },
};
