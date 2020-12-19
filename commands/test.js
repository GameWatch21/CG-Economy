const Discord = require('discord.js');
const client = new Discord.Client();
/*const webhooks = new Discord.WebhookClient(788649704409635667, config.webhookToken); */


module.exports = {
  name: "test",
  description: "Just testing webhook",
  execute(message, args){
const channel = client.channels.cache.get('788606338803695667');
	try {
		const webhooks = channel.fetchWebhooks();
		const webhook = webhooks.first();
    const embed = new Discord.MessageEmbed()
    .setTitle("Testing Webhook")
    .setDescription(args[0]);
    
		 webhook.send('Webhook test', {
			username: 'some-username',
			avatarURL: 'https://i.imgur.com/wSTFkRM.png',
			embeds: [embed],
		});
	} catch (error) {
		console.error('Error trying to send: ', error);
	}
	if(args[0] == "create"){
message.channel.createWebhook(`${args[1]}`, {
  avatar: 'https://i.imgur.com/mI8XcpG.jpg',
  reason: 'Needed a cool new Webhook'
})
  .then(console.log)
  .catch(console.error);
	}
  }
}