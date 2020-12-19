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
      {name:`${process.env.PREFIX}!ping` , value:'Checking if the bot are online or offline' , inline: true},
  
   {name: `${process.env.PREFIX}info-server` , value: 'Giving the Server Information', inline: true},
      {name: `${process.env.PREFIX}prune` , value: 'Deleting/Pruning messages' , inline: true},
      {name: `${process.env.PREFIX}im` , value: 'Just a weird command for testing' , inline: true},
      {name: `${process.env.PREFIX}reload` , value: 'Reloading a commands' , inline: true},
      {name: `${process.env.PREFIX}reaction` , value: 'Giving a Reaction collector' , inline: true},
      {name: `${process.env.PREFIX}avatar` , value: 'Showing the user avatar link' , inline: true}
    ) 
    .setTimestamp()
    .setFooter(process.env.F_CREDITS);
    
    message.channel.send(helpEmbed)
  }
}
