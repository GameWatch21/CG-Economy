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
// [GENERAL COMMAND]
if (message.content === `${prefix}test`) {
	message.channel.send('Yep the bot Work');
}
if (message.content === `${prefix}hi`) {
	message.channel.send('stop talking to me');
}if (message.content === `${prefix}why?`) {
	message.channel.send('Because i am a bot');
}
client.login(token);
//to add your discord bot token, go to config.json
