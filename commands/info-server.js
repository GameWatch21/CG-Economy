const Discord = require('discord.js')

module.exports = {
  name: "info-server",
  description: "Check the server Information",
  execute(message, args){
    const embed = new Discord.MessageEmbed()
    .setColor('#0099ff')
  .setTitle(`Information about ${message.guild.name} server`)
  .setDescription('Detailed Information:')
  .addFields(
    { name: 'Total Members:', value: `${message.guild.memberCount}`},
     { name: 'Created at:', value: `${message.guild.createdAt}`, inline: true },
    { name: 'This server owned by:', value: `${message.guild.owner}`, inline: true },
   )
    .setTimestamp()
  .setFooter('Created by GameWatch21');

    message.channel.send(embed)
  }
}
