const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "profile",
  aliases: ["pro"],
  description: "Check your Economy Profile",
  execute(message, args){
    function getUser(mention) {
    if (!mention) return;
    if (mention.startsWith("<@") && mention.endsWith(">")) {
      var mention = mention.slice(2, -1);
      if (mention.startsWith("!")) {
        mention = mention.slice(1);
      }
      return message.guild.member(message.guild.members.get(mention));
    }
}
     const user = getUser(args[0]) || message.member;
    const check = db.fetch(`class_check.${user.id}`);
    const classes = db.fetch(`class.${user.id}`);
    const money = db.fetch(`money.${user.id}`) || 0;
    const mined = db.fetch(`mined.${user.id}`) || 0;
    const harvest = db.fetch(`harvest.${user.id}`) || 0;
    const crafted = db.fetch(`crafted.${user.id}`) || 0;
    const works = db.fetch(`worked.${user.id}`) || 0;
    
    if(check == "no"){
      message.channel.send("You need to register first!\nUse `g!register` to be able to use this command");
      }
    
   /*  message.channel.send("This command will come soon, so be patience, im working on it"); */
    if(check == "registered"){
    if(classes == "miner"){
      const miner_embed = new Discord.MessageEmbed()
  .setTitle(`${user.user.tag}'s Profile`)
  .setDescription(`Here's are the profile:`)
  .addFields(
      {name: "Class:" , value: classes},
      {name: "Money:" , value: money , inline: true},
      {name: "Mines:" , value: mined , inline: true},
      )
  .setTimestamp()
  .setFooter(process.env.F_CREDITS)
  .setColor("YELLOW");
      message.channel.send(miner_embed);
      }
      if(classes == "farmer"){
       const farmer_embed = new Discord.MessageEmbed()
      .setTitle(`${user.user.tag}'s Profile`)
      .setDescription(`Here's are the profile:`)
      .addFields(
      {name: "Class:" , value: classes},
      {name: "Money:" , value: money , inline: true},
      {name: "Harvest:" , value: harvest , inline: true},
      )
      .setTimestamp()
      .setFooter(process.env.F_CREDITS)
      .setColor("YELLOW");
       message.channel.send(farmer_embed)
      }
      if(classes == "worker"){
      const worker_embed = new Discord.MessageEmbed()
      .setTitle(`${user.user.tag}'s Profile`)
      .setDescription(`Here's are the profile:`)
      .addFields(
      {name: "Class:" , value: classes},
      {name: "Money:" , value: money , inline: true},
      {name: "Works" , value: works  , inline: true},
      )
      .setTimestamp()
      .setFooter(process.env.F_CREDITS)
      .setColor("YELLOW");
      
      message.channel.send(worker_embed);
     }
     if(classes == "crafter"){
     const crafter_embed = new Discord.MessageEmbed()
     const miner_embed = new Discord.MessageEmbed()
      .setTitle(`${user.user.tag}'s Profile`)
      .setDescription(`Here's are the profile:`)
      .addFields(
      {name: "Class:" , value: classes},
      {name: "Money:" , value: money , inline: true},
      {name: "Crafted:" , value: crafted , inline: true},
      )
      .setTimestamp()
      .setFooter(process.env.F_CREDITS)
      .setColor("YELLOW");
     message.channel.send(crafter_embed)
     }
      }
    }
  }