module.exports = {
	name: 'test',
	description: 'For Testing the bot is online or not :)',
	execute(message, args) {
		message.channel.send('Yep i online');
	},
};
