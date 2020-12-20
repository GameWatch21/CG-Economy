const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "farm",
  description: "Lets play with your farm :)",
  execute(message, args){
    const option = args[0];
    const check = db.fetch(`class_check.${message.author.id}`) || "no";
    const classes = db.fetch(`class.${message.author.id}`);
    if(check == 'no'){
      message.reply("You didnt register yet, use `s!register` to register");
      }
    if(!option){
      message.reply('what you are going to do with your farm?')
    }
    if(classes != "Farmer"){
      message.reply("This is not your class command")
    }
    if(classes == "Farmer"){
      //COMING SOON
    }
    
  }
}