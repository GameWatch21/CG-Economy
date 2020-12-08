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
     db.set(`class.${message.author.id}`, "miner"); db.set(`class_check.${message.author.id}` , "registered");
     message.channel.send("Congratulation, you choose the `Miner` class\nNow you can check your profile with `s!profile`\nFuther Information about `Miner` class, check with `s!help miner`");
     }
    if(args[0] == "farmer"){
     db.set(`class.${message.author.id}`, "farmer"); db.set(`class_check.${message.author.id}` , "registered");
     message.channel.send("Congratulation, you choose the `Farmer` class\nNow you can check your profile with `s!profile`\nFuther Information about `Farmer` class, check with `s!help farmer`");
     }
    if(args[0] == "crafter"){
     db.set(`class.${message.author.id}`, "crafter"); db.set(`class_check.${message.author.id}` , "registered");
     message.channel.send("Congratulation, you choose the `Crafter` class\nNow you can check your profile with `s!profile`\nFuther Information about `Crafter` class, check with `s!help crafter`");
     }
    if(args[0] == "worker"){
     db.set(`class.${message.author.id}`, "worker"); db.set(`class_check.${message.author.id}` , "registered");
     message.channel.send("Congratulation, you choose the `Worker` class\nNow you can check your profile with `s!profile`\nFuther Information about `Worker` class, check with `s!help worker`");
     }
    }
    }
  }