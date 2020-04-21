//This is are our complier
const Discord = require('discord.js');

//Adding the discord client if this is discord bot
const client = new Discord.Client();

//it will replace the prefix and discord bot token easily in config.json
const { prefix, token } = require('./config.json');

//This message will be send on your console if the bot are ready to run
client.once('ready', () => {
	console.log('CG-Economy are Ready to Serve');
});
//For Listening The Message
client.on('message', message => {
	console.log(message.content);
});
// [PING COMMAND]
if (message.content === 'p!test') {
	message.channel.send('Yep the bot Work');
}

client.login(token);
//to add your discord bot token, go to config.json
