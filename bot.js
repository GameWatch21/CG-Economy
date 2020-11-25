const fs = require("fs");
const Discord = require('discord.js');
const { prefix,token } = require('./config.json')
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  client.commands.set(command.name, command);
}

client.once = ('Ready', () => {
  console.log("Ah, it's time for work");
  client.user.setActivity("with depression", {
  type: "STREAMING",
  url: "https://www.twitch.tv/monstercat"
});
});

client.on('message',message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if(command === "ping"){
    client.commands.get("ping").execute(message, args);
  }
  if(command === "info-server"){
    client.commands.get("info-server").execute(message, args);
     }
  if(command === "say"){
    message.channel.send(`${args}`)
  }
  if(command === "prune"){
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
});

client.login(token)
