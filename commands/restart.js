const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "restart",
  description: "Restart the Economy Game profile",
  execute(message, args){
  db.delete(`class.${message.author.id}`);
 db.delete(`class_check.${message.author.id}`)
    message.channel.send('Your profile has been restarted')
    }
  }