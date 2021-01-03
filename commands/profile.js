const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "profile",
  aliases: ["pro"],
  description: "Check your Economy Profile",
  execute(message, args){
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
    const check = db.fetch(`class_check.${message.author.id}`);
    const classes = db.fetch(`class.${message.author.id}`);
    const farmer = ["farmer" , "farm" , "farming"];
    const miner = ["miner" , "mining" , "mine"];
    const crafter = ["crafter" , "crafting" , "craft"];
    const worker = ["worker" , "working" , "work"];
    /*const classs = classes.toLowercase();*/
    const money = db.fetch(`money.${message.author.id}`) || 0;
    const mined = db.fetch(`mined.${message.author.id}`) || 0;
    const harvest = db.fetch(`harvest.${message.author.id}`) || 0;
    const crafted = db.fetch(`crafted.${message.author.id}`) || 0;
    const works = db.fetch(`worked.${message.author.id}`) || 0;
    const energy = db.fetch(`energy.${message.author.id}`) || 0;
    
    if(check == "no"){
      message.channel.send("You need to register first!\nUse `g!register` to be able to use this command");
      }

    if(check == "registered"){
    if(miner.includes(classes.toLowerCase())){
      const miner_embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.tag}'s Profile`)
  .setDescription(`Here's are the profile:`)
  .addFields(
      {name: "Class:" , value: classes},
      {name: "Money:" , value: money , inline: true},
      {name: "Mines:" , value: mined , inline: true},
      {name: "Energy:" , value: energy , inline: true}
      )
  .setTimestamp()
  .setFooter(process.env.F_CREDITS)
  .setColor("YELLOW");
      message.channel.send(miner_embed);
      }
      if(farmer.includes(classes.toLowerCase())){
       const farmer_embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag}'s Profile`)
      .setDescription(`Here's are the profile:`)
      .addFields(
      {name: "Class:" , value: classes},
      {name: "Money:" , value: money , inline: true},
      {name: "Harvest:" , value: harvest , inline: true},
      {name: "Energy:" , value: energy , inline: true}
      )
      .setTimestamp()
      .setFooter(process.env.F_CREDITS)
      .setColor("YELLOW");
       message.channel.send(farmer_embed)
      }
      if(worker.includes(classes.toLowerCase())){
      const worker_embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag}'s Profile`)
      .setDescription(`Here's are the profile:`)
      .addFields(
      {name: "Class:" , value: classes},
      {name: "Money:" , value: money , inline: true},
      {name: "Works" , value: works  , inline: true},
      {name: "Energy:" , value: energy , inline: true}
      )
      .setTimestamp()
      .setFooter(process.env.F_CREDITS)
      .setColor("YELLOW");
      
      message.channel.send(worker_embed);
     }
     if(crafter.includes(classes.toLowerCase())){
     const crafter_embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag}'s Profile`)
      .setDescription(`Here's are the profile:`)
      .addFields(
      {name: "Class:" , value: classes},
      {name: "Money:" , value: money , inline: true},
      {name: "Item Crafted:" , value: crafted , inline: true},
      {name: "Energy:" , value: energy , inline: true}
      )
      .setTimestamp()
      .setFooter(process.env.F_CREDITS)
      .setColor("YELLOW");
     message.channel.send(crafter_embed);
     }
      }
  }
  }