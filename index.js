const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('CG-Economy are Ready to Serve');
});

client.on('message', message => {
	console.log(message.content);
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();
});
// [GENERAL COMMAND]
if (command === 'test') 
    client.commands.get('test').execute(message, args);
}if (command === 'hi') {
	message.channel.send('stop talking to me');
}if (command === 'why?') {
	message.channel.send('Because i am a bot');
}if (command === 'mention') {
	if (!message.mentions.users.size) {
	return message.reply('you need to tag a user in order for me to mention them!');

	const taggedUser = message.mentions.users.first();

	message.channel.send(`You mention: ${taggedUser.username}`);
}if (command === 'avatar') {
	if (!message.mentions.users.size) {
		return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
	}

	const avatarList = message.mentions.users.map(user => {
		return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
	});
	message.channel.send(avatarList);
}
client.login(token);
//to add your discord bot token, go to config.json
