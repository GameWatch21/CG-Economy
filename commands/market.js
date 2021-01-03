const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "market",
  description: "Market of all Trades",
  aliases: ["mark"],
  execute(message, args){
    const check = db.fetch(`class_check.${message.author.id}`) || "no";
    const classes = db.fetch(`class.${message.author.id}`);
    // ======================
    // MINER CLASS DATABASE
    // ======================
    const stone = db.fetch(`stone.${message.author.id}`) || 0;
    const rock = db.fetch(`rock.${message.author.id}`) || 0;
    const coal = db.fetch(`coal.${message.author.id}`) || 0;
    const iron_ore = db.fetch(`iron_ore.${message.author.id}`) || 0;
    const gold_ore = db.fetch(`gold_ore.${message.author.id}`) || 0;
    const diamond_ore = db.fetch(`diamond_ore.${message.author.id}`) || 0;
    const iron = db.fetch(`iron.${message.author.id}`) || 0;
    const gold = db.fetch(`gold.${message.author.id}`) || 0;
    const diamond = db.fetch(`diamond.${message.author.id}`) || 0;
    // ======================
    // FARMER CLASS DATABASE
    // ======================
    const wheat = db.fetch(`wheat.${message.author.id}`) || 0;
    const seed = db.fetch(`seed.${message.author.id}`) || 0;
    const carrot = db.fetch(`carrot.${message.author.id}`) || 0;
    const potato = db.fetch(`potato.${message.author.id}`) || 0;
    const land = db.fetch(`land.${message.author.id}`) || 0;
    const fertilizer = db.fetch(`fertilizer.${message.author.id}`) || 0;
    const log = db.fetch(`log.${message.author.id}`) || 0;
    // ======================
    // WORKER CLASS DATABASE (most fantasy inventory ever)
    // ======================
    const reputation = db.fetch(`reputation.${message.author.id}`) || 0;
    // ENERGY WILL BE GLOBAL THING
    const energy = db.fetch(`energy.${message.author.id}`) || 0;
    const experience = db.fetch(`experience.${message.author.id}`) || 0;
    const rank = db.fetch(`rank.${message.author.id}`) || 0;
    // ======================
    // CRAFTER CLASS DATABASE (complicated cause i need to mix between farmer and miner class)
    // ======================
    const hoe = db.fetch(`hoe.${message.author.id}`) || 0;
    const pickaxe = db.fetch(`rank.${message.author.id}`) || 0;
    const shovel = db.fetch(`shovel.${message.author.id}`) || 0;
    // ======================
    // END OF USER DATABASE 
    // ======================
    
    // ======================
    // START OF MARKET DATABASE
    // ======================
    // ======================
    // MINER CLASS DATABASE
    // ======================
    const stone_market = db.fetch(`stone`) || 0;
    const rock_market = db.fetch(`rock`) || 0;
    const coal_market = db.fetch(`coal`) || 0;
    const iron_ore_market = db.fetch(`iron_ore`) || 0;
    const gold_ore_market = db.fetch(`gold_ore`) || 0;
    const diamond_ore_market = db.fetch(`diamond_ore`) || 0;
    const iron_market = db.fetch(`iron`) || 0;
    const gold_market = db.fetch(`gold.`) || 0;
    const diamond_market = db.fetch(`diamond`) || 0;
    // ======================
    // FARMER CLASS DATABASE
    // ======================
    const wheat_market = db.fetch(`wheat`) || 0;
    const seed_market = db.fetch(`seed`) || 0;
    const carrot_market = db.fetch(`carrot`) || 0;
    const potato_market = db.fetch(`potato`) || 0;
    const land_market = db.fetch(`land`) || 0;
    const fertilizer_market = db.fetch(`fertilizer`) || 0;
    const log_market = db.fetch(`log`) || 0;
   // ======================
    // CRAFTER CLASS DATABASE (complicated cause i need to mix between farmer and miner class)
    // ======================
    const hoe_market = db.fetch(`hoe.${message.author.id}`) || 0;
    const pickaxe_market = db.fetch(`rank.${message.author.id}`) || 0;
    const shovel = db.fetch(`shovel.${message.author.id}`) || 0;
    // ======================
    // END OF DATABASE
    // ======================
    
  }
}