const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "inventory",
  description: "Check your inventort for each class",
  aliases: ["inv" , "backpack"],
  execute(message, args){
    const check = db.fetch(`class_check.${message.author.id}`);
    const classes = db.fetch(`class.${message.author.id}`);
    // ======================
    // MINER CLASS DATABASE
    // ======================
    const stone = db.fetch(`stone.${message.author.id}`);
    const rock = db.fetch(`rock.${message.author.id}`);
    const coal = db.fetch(`coal.${message.author.id}`);
    const iron_ore = db.fetch(`iron_ore.${message.author.id}`);
    const gold_ore = db.fetch(`gold_ore.${message.author.id}`);
    const diamond_ore = db.fetch(`diamond_ore.${message.author.id}`);
    const iron = db.fetch(`iron.${message.author.id}`);
    const gold = db.fetch(`gold.${message.author.id}`);
    const diamond = db.fetch(`diamond.${message.author.id}`);
    // ======================
    // FARMER CLASS DATABASE
    // ======================
    const wheat = db.fetch(`wheat.${message.author.id}`);
    const seed = db.fetch(`seed.${message.author.id}`);
    const carrot = db.fetch(`carrot.${message.author.id}`);
    const potato = db.fetch(`potato.${message.author.id}`);
    const land = db.fetch(`land.${message.author.id}`);
    const fertilizer = db.fetch(`fertilizer.${message.author.id}`);
    const log = db.fetch(`log.${message.author.id}`);
    // ======================
    // WORKER CLASS DATABASE (most fantasy inventory ever)
    // ======================
    const reputation = db.fetch(`reputation.${message.author.id}`);
    const energy = db.fetch(`energy.${message.author.id}`);
    const experience = db.fetch(`land.${message.author.id}`);
    const rank = db.fetch(`rank.${message.author.id}`);
    // ======================
    // CRAFTER CLASS DATABASE (complicated cause i need to mix between farmer and miner class)
    // ======================
    const hoe = db.fetch(`hoe.${message.author.id}`);
    const pickaxe = db.fetch(`rank.${message.author.id}`);
    const shovel = db.fetch(`shovel.${message.author.id}`);
    
  }
}