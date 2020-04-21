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
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();
});
// [GENERAL COMMAND]
if (command === 'test') {
	message.channel.send('Yep the bot Work');
}
if (command === 'hi') {
	message.channel.send('stop talking to me');
}if (command === 'why?') {
	message.channel.send('Because i am a bot');
}if (command === 'mention') {
	
	const taggedUser = message.mentions.users.first();

	message.channel.send(`You mention: ${taggedUser.username}`);
}
client.login(token);
//to add your discord bot token, go to config.json
