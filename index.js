const Discord = require('discord.js');
const client = new Discord.Client();

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

//This is the key Where you need to add your Token
client.login('Discord Bot Token insert here');
