const Discord = require("discord.js");
const db = require('quick.db');

module.exports = {
  name: "register",
  description:"Register your account tothe economy games",
  aliases: "reg",
  execute(message, args){
    var economy = args[0];
    var class_check = db.fetch(`class_check.${message.author.id}`) || "no";
    if(!economy){
      message.channel.send("Hello, please choose what class you want to join, These are the classes:\n• Miner\n• Farmer\n• Worker\n• Crafter\nThen use `s!register [class]` to join the game\nAnd last, Have Fun")
      }
    if(class_check == "registered"){
      message.channel.send("You have already choose a class and register, You can check your profile using `s!profile`");
      }
    if(class_check == "no"){
   if(args[0] == "miner"){
     const miner_embed = new Discord.MessageEmbed()
     .setTitle(`New Profile Created!🎉`)
     .setDescription("You are now a  ⛏️Miner Class\n\nCongratulation, you choose the `Miner` class\nNow you can check your profile with `s!profile`\nFuther Information about `Miner` class, check with `s!help miner`")
    .setTimestamp()
    .setFooter(process.env.F_CREDITS)
     .setColor("GREEN");
     db.set(`class.${message.author.id}`, "Miner"); db.set(`class_check.${message.author.id}` , "registered");
     message.channel.send(miner_embed);
     }
    if(args[0] == "farmer"){
     const farmer_embed = new Discord.MessageEmbed()
     .setTitle(`New Profile Created!🎉`)
     .setDescription("You are now a  🌱Farmer Class\n\nCongratulation, you choose the `Farmer` class\nNow you can check your profile with `s!profile`\nFuther Information about `Farmer` class, check with `s!help farmer`")
    .setTimestamp()
    .setFooter(process.env.F_CREDITS)
     .setColor("GREEN");
      
      db.set(`class.${message.author.id}`, "Farmer"); db.set(`class_check.${message.author.id}` , "registered");
     message.channel.send(farmer_embed/*"Congratulation, you choose the `Farmer` class\nNow you can check your profile with `s!profile`\nFuther Information about `Farmer` class, check with `s!help farmer`"*/);
     }
    if(args[0] == "crafter"){
const crafter_embed = new Discord.MessageEmbed()
     .setTitle(`New Profile Created!🎉`)
     .setDescription("You are now a  🛠️Crafter Class\n\nCongratulation, you choose the `Crafter` class\nNow you can check your profile with `s!profile`\nFuther Information about `Crafter` class, check with `s!help crafter`")
    .setTimestamp()
    .setFooter(process.env.F_CREDITS)
     .setColor("GREEN");
      db.set(`class.${message.author.id}`, "Crafter"); db.set(`class_check.${message.author.id}` , "registered");
     message.channel.send(crafter_embed/*"Congratulation, you choose the `Crafter` class\nNow you can check your profile with `s!profile`\nFuther Information about `Crafter` class, check with `s!help crafter`"*/);
     }
    if(args[0] == "worker"){
   const worker_embed = new Discord.MessageEmbed()
     .setTitle(`New Profile Created!🎉`)
     .setDescription("You are now a  💼Worker Class\n\nCongratulation, you choose the `Worker` class\nNow you can check your profile with `s!profile`\nFuther Information about `Worker` class, check with `s!help worker`")
    .setTimestamp()
    .setFooter(process.env.F_CREDITS)
     .setColor("GREEN"); 
      db.set(`class.${message.author.id}`, "Worker"); db.set(`class_check.${message.author.id}` , "registered");
     message.channel.send(worker_embed/*"Congratulation, you choose the `Worker` class\nNow you can check your profile with `s!profile`\nFuther Information about `Worker` class, check with `s!help worker`"*/);
     }
    }
    }
  }