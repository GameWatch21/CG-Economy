const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
  name: "mine",
  description: "Check your inventort for each class",
  aliases: ["m" , "dig"],
  execute(message, args){

const pickaxe = db.fetch(`pickaxe.${message.author.id}`) || 0;
    const energy = db.fetch(`energy.${message.author.id}`) || 0;

  }
}
