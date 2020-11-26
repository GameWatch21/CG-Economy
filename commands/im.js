module.exports = {
  name: 'im',
  description: 'Umm just a weird command, for testing',
  execute(message, args) {
    if (!args.length) {
      return message.channel.send(`... So who are you?, ${message.author}!`);
    } else if (args[0] === 'GameWatch21') {
      return message.channel.send('nope, you are not GameWatch21');
    }

    message.channel.send(`So you are ${args}, am i right?`);
  },
};
