const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('CG-Economy are Ready to Serve');
});

client.login('Discord Bot Token insert here');
