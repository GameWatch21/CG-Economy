const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "profile",
  aliases: ["pro"],
  description: "Check your Economy Profile",
  execute(message, args, Profile, proDB, profile){
   /* function getUser(mention) {
    if (!mention) return;
    if (mention.startsWith("<@") && mention.endsWith(">")) {
      var mention = mention.slice(2, -1);
      if (mention.startsWith("!")) {
        mention = mention.slice(1);
      }
      return message.guild.member(message.guild.members.get(mention));
    }
} */
    /* const user = message.mentions.users.first() ;
     /*getUser(args[0]) || message.member; */
    message.channel.send(`Your balance is ${Profile.money}`);
  }
  }