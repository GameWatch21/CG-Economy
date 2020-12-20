const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "inventory",
  description: "Check your inventort for each class",
  aliases: ["inv" , "backpack"],
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
    // END OF DATABASE
    // ======================
    
    if(check == "no"){
      message.reply("You didnt register yet, use `s!register` to register");
    }
    if(check == "registered"){
      if(classes == "Miner" ){
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}'s Inventory`)
        .addFields(
          {name: `Stone:` , value: `${stone}`},
          {name: `Coal:` , value: `${coal}`},
          {name: `Rock:` , value: `${rock}`},
          {name: `Iron Ore:` , value: `${iron_ore}`},
          {name: `Gold Ore:` , value: `${gold_ore}`},
          {name: `Diamond Ore:` , value: `${diamond_ore}`},
          {name: `Iron:` , value: `${iron}`},
          {name: `Gold:` , value: `${gold}`},
          {name: `Diamond` , value: `${diamond}`}
          )
          .setTimestamp()
          .setColor("RANDOM");
          
          message.channel.send(embed);
        
      }
      if(classes == "Farmer"){
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}'s Inventory`)
        .addFields(
          {name: `Seed:` , value: `${seed}`},
          {name: `Land:` , value: `${land}`},
          {name: `Fertilizer:` , value: `${fertilizer}`},
          {name: `Wheat:` , value: `${wheat}`},
          {name: `Carrot:` , value: `${carrot}`},
          {name: `Potato:` , value: `${potato}`},
          {name: `Log:` , value: `${log}`}
          /*{name: `Gold:` , value: `${gold}`},
          {name: `Diamond` , value: `${diamond}`}*/
          )
          .setTimestamp()
          .setColor("RANDOM");
          
          message.channel.send(embed);
      }
      if(classes == "Worker"){
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}'s Inventory`)
        .addFields(
          {name: `Reputation:` , value: `${reputation}`},
          {name: `Experience:` , value: `${experience}`},
          {name: `Energy:` , value: `${energy}`},
          {name: `Rank:` , value: `${rank}`}/*,
          {name: `Gold Ore:` , value: `${gold_ore}`},
          {name: `Diamond Ore:` , value: `${diamond_ore}`},
          {name: `Iron:` , value: `${iron}`},
          {name: `Gold:` , value: `${gold}`},
          {name: `Diamond` , value: `${diamond}`}*/
          )
          .setTimestamp()
          .setColor("RANDOM");
          
          message.channel.send(embed);
      }
      if(classes == "Crafter"){
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}'s Inventory`)
        .addFields(
         /* {name: `Axe:` , value: `${axe}`},*/
          {name: `Pickaxe:` , value: `${pickaxe}`},
          {name: `hoe:` , value: `${hoe}`},
          {name: `Shovel:` , value: `${shovel}`}/*,
          {name: `Gold Ore:` , value: `${gold_ore}`},
          {name: `Diamond Ore:` , value: `${diamond_ore}`},
          {name: `Iron:` , value: `${iron}`},
          {name: `Gold:` , value: `${gold}`},
          {name: `Diamond` , value: `${diamond}`}*/
          )
          .setTimestamp()
          .setColor("RANDOM");
          
          message.channel.send(embed);
      }
      
    }
    
  }
}