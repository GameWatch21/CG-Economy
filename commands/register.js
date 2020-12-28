const Discord = require("discord.js");
const db = require('quick.db');

module.exports = {
  name: "register",
  description:"Register your account tothe economy games",
  aliases: "reg",
  execute(message, args){
    var economy = args[0];
    var class_check = db.fetch(`class_check.${message.author.id}`) || "no";
    const farmer = ["farmer" , "farm" , "farming"];
    const miner = ["miner" , "mining" , "mine"];
    const crafter = ["crafter" , "crafting" , "craft"];
    const worker = ["worker" , "working" , "work"];
    if(!economy){
      message.reply("Hello, please choose what class you want to join, These are the classes:\n• Miner\n• Farmer\n• Worker\n• Crafter\nThen use `s!register [class]` to join the game\nAnd lastly, Have Fun!")
      }
    if(class_check == "registered"){
      message.reply("You have already chose a class, you can check your profile using `s!profile`.");
      }
    if(class_check == "no"){
   if(miner.includes(args[0].toLowerCase())){
     const miner_embed = new Discord.MessageEmbed()
     .setTitle(`New Profile Created!🎉`)
     .setDescription("You are now a  ⛏️Miner Class\n\nCongratulations, you chose the `Miner` class!\nYou can check your profile with \`s!profile`.\nTo see further information about `Miner` class, check with `s!help miner`")
    .setTimestamp()
    .setFooter(process.env.F_CREDITS)
     .setColor("GREEN");
     db.set(`class.${message.author.id}`, "Miner"); 
     db.set(`class_check.${message.author.id}` , "registered");
     db.set(`energy.${message.author.id}` , 100);
     message.channel.send(miner_embed);
     }
    if(farmer.includes(args[0].toLowerCase())){
     const farmer_embed = new Discord.MessageEmbed()
     .setTitle(`New Profile Created!🎉`)
     .setDescription("You are now a  🌱Farmer Class\n\nCongratulations, you chose the `Farmer` class!\nYou can check your profile with `s!profile`\nTo see further information about `Farmer` class, check with `s!help farmer`")
    .setTimestamp()
    .setFooter(process.env.F_CREDITS)
     .setColor("GREEN");
      
      db.set(`class.${message.author.id}`, "Farmer"); 
      db.set(`class_check.${message.author.id}` , "registered");
      db.set(`energy.${message.author.id}` , 100);
     message.channel.send(farmer_embed/*"Congratulation, you choose the `Farmer` class\nNow you can check your profile with `s!profile`\nFuther Information about `Farmer` class, check with `s!help farmer`"*/);
     }
    if(crafter.includes(args[0].toLowerCase())){
const crafter_embed = new Discord.MessageEmbed()
     .setTitle(`New Profile Created!🎉`)
     .setDescription("You are now a  🛠️Crafter Class\n\nCongratulations, you choose the `Crafter` class!\nYou can check your profile with `s!profile`\nTo see further Information about `Crafter` class, check with `s!help crafter`")
    .setTimestamp()
    .setFooter(process.env.F_CREDITS)
     .setColor("GREEN");
      db.set(`class.${message.author.id}`, "Crafter"); 
      db.set(`class_check.${message.author.id}` , "registered");
      db.set(`energy.${message.author.id}` , 100);
     message.channel.send(crafter_embed/*"Congratulation, you choose the `Crafter` class\nNow you can check your profile with `s!profile`\nFuther Information about `Crafter` class, check with `s!help crafter`"*/);
     }
    if(worker.includes(args[0].toLowerCase())){
   const worker_embed = new Discord.MessageEmbed()
     .setTitle(`New Profile Created!🎉`)
     .setDescription("You are now a  💼Worker Class\n\nCongratulations, you choose the `Worker` class!\nNow you can check your profile with `s!profile`\nTo see further Information about `Worker` class, check with `s!help worker`")
    .setTimestamp()
    .setFooter(process.env.F_CREDITS)
     .setColor("GREEN"); 
      db.set(`class.${message.author.id}`, "Worker"); 
      db.set(`class_check.${message.author.id}` , "registered");
      db.set(`energy.${message.author.id}` , 100);
     message.channel.send(worker_embed/*"Congratulation, you choose the `Worker` class\nNow you can check your profile with `s!profile`\nFuther Information about `Worker` class, check with `s!help worker`"*/);
     }
    }
    }
  }