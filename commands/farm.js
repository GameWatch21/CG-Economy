const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
  name: "farm",
  description: "Lets play with your farm :)",
  execute(message, args){
    const option = args[0];
    const check = db.fetch(`class_check.${message.author.id}`) || "no";
    const classes = db.fetch(`class.${message.author.id}`);
    /*let growth = 3500000;
    let harvest_time =  db.get(`harvest_time.${message.author.id}`);
    if(message.channel.type == "text"){
    if (harvest_time !== null && growth - (Date.now() - harvest_time ) > 0) {
      let time = ms(growth - (Date.now() - harvest_time));
      return message.channel.send(
        `**Your plant is not yet ready to be harvested. Come back in ${time.hours}h ${time.minutes}m ${time.seconds}`
      );
    }*/
    //
    // ======================
    //
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
      // ================
      // PLANTING COMMAND
      // ================
      if(option == "plant"){
        const land = db.fetch(`land.${message.author.id}`) || 0;
        const seed = db.fetch(`seed.${message.author.id}`) || 0;
        const shovel = db.fetch(`shovel.${message.author.id}`) || 0;
        
       if(land == "0"){
         message.reply("You need land to plant your seed");
       }
       if(seed == "0"){
         message.reply("You need seed to grow a plant");
       }
       if(shovel == "0"){
         message.reply("You need shovel for your land");
       }
       if(shovel >= "1"){
         if(seed >= "1"){
           if(land >= "1"){
             db.subtract(`seed.${message.author.id}` , 1);
             db.subtract(`land` , 1);
             db.set(`harvest_time.${message.author.id}`, Date.now());
             message.channel.send("You have planted your seed, wait for 30 Minutes to get your plant harvested")
           }
         }
       }
       
        
      }
      // ================
      // END OF PLANTING COMMAND
      // ================
      
      // ================
      // HARVESTING COMMAND
      // ================
      if(option == "harvest"){
    let growth = 1800000;
    let harvest_time =  db.get(`harvest_time.${message.author.id}`);
    if(message.channel.type == "text"){
    if (harvest_time !== null && growth - (Date.now() - harvest_time ) > 0) {
      let time = ms(growth - (Date.now() - harvest_time));
      return message.channel.send(
        `**Your plant is not yet ready to be harvested. Come back in ${time.hours}h ${time.minutes}m ${time.seconds}`
      );
    }
      }
      }
      // ================
      // END OF HARVESTING COMMAND
      // ================
  
  }
  }
}