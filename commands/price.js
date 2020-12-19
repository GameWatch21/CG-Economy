const Discord = require('discord.js');

module.exports = {
  name: 'price',
  description: 'Check a coin price',
  aliases: ['ticker'],
  execute(message, args){
function ticker(json)
{
  return
  response.json()

/*return items[Math.floor(Math.random()*items.length)];
     */
}

/*let json = t.json();*/
/*var items = [":money_mouth:" , ":money_with_wings:" , ":moneybag:"]; */
const fetch = require('node-fetch');

const response = fetch('https://api.beyondcoin.io/price');

  message.channel.send(ticker(json));
  }
}