const Discord = require("discord.js")

module.exports = {
  name: "prune",
  description: "Pruning message from 2-100 messages",
  execute(message, args){
    const amount = parseInt(args[0]);
    
    if(isNaN(amount)) {
      return message.channel.send("bruh,It's not a number");
    }
    if(amount < 2 || amount > 100 ) {
      return message.channel.send("We only accept number 2-100");
    }
      
      message.channel.bulkDelete(amount, true).catch( err => {
      console.error(err);
      message.channel.send("i'm just saying, there is something error when pruning message")
      
    })
   
  }
}
