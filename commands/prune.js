module.exports = {
  name: 'purge',
  description: 'Purging messages',
  aliases: ['prune'],
  execute(message, args){

    const amount = Math.floor(parseInt(args[0]) + 1);
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `${message.author},You don't have enough permissions for this command!`
      );

    if (isNaN(amount)) {
      return message.reply("that doesn't seem to be a valid number.");
    } else if (amount <= 0 || amount > 100) {
      return message.reply("You need to input a number between 1 and 99.");
    }

    message.channel.bulkDelete(amount, true);
    return message
      .reply(`Successfully deleted ${amount} messages.\n\nThis message will be deleted in 3 secs`)
      .then(msg => {
        msg.delete({ timeout: 3000 });
      });
  }
}