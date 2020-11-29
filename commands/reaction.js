const Discord = require('discord.js');

module.exports = {
  name: 'reaction',
  description: 'A test command for upcoming help command',
  aliases: ['react' , 'r'],
  execute(message, args){
  const embed1 = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle(`Testing no.1`)
 // .setAuthor(`${message.author}`, 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
  .setDescription('You choose the legendary Thumb up')
// .setThumbnail(`${message.guild.icon}`)
  .addFields(
    { name: 'Just about you and me, you will get', value: `You get $100 by reacting`},
   )
  //.addField('Inline field title', 'Some value here', true)
// .setImage(`${message.guild.icon}`)
  .setTimestamp()
  .setFooter('Created by GameWatch21 | Nah this one, is in Prototype');
      
  const embed2 = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle(`Testing No.2`)
 // .setAuthor(`${message.author}`, 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
  .setDescription('You reacting the legendary Thumbs down')
// .setThumbnail(`${message.guild.icon}`)
  .addFields(
    { name: 'Just for you and me, by reacting this', value: `You fined -$100, money is easy like that`},
 )
  //.addField('Inline field title', 'Some value here', true)
// .setImage(`${message.guild.icon}`)
  .setTimestamp()
  .setFooter('Created by GameWatch21 | Another prototype, just wait till i fix this ok?');
      
    message.react('👍').then(() => message.react('👎'));

const filter = (reaction, user) => {
  return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
  .then(collected => {
    const reaction = collected.first();

    if (reaction.emoji.name === '👍') {
      message.channel.send(embed1);
    } else {
      message.channel.send(embed2);
    }
  })
  .catch(collected => {
    message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
  });
  }
}
