const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Showing all list of the commands',
  aliases: ['h'],
  execute(message, args){
    const helpEmbed = new Discord.MessageEmbed()
    .setTitle(`${message.author}, Help Commands Page 1/1`)
    .setDescription(`Here are the commands:`)
    .setColor('RANDOM')
 .addFields(
      {name:'cg!ping' , value:'Checking if the bot are online or offline' , inline: true},
  
   {name: 'cg!info-server' , value: 'Giving the Server Information', inline: true},
      {name: 'cg!prune' , value: 'Deleting/Pruning messages' , inline: true},
      {name: 'cg!im' , value: 'Just a weird command for testing' , inline: true},
      {name: 'cg!reload' , value: 'Reloading a commands' , inline: true},
      {name: 'cg!reaction' , value: 'Giving a Reaction collector' , inline: true},
      {name: 'cg!avatar' , value: 'Showing the user avatar link' , inline: true},
    ) 
    .setTimestamp()
    .setFooter(process.env.F_CREDITS);
    
    message.channel.send(helpEmbed)
  }
}
