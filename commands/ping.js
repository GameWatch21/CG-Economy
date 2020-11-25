module.exports = {
  name: "ping",
  description: "Checking bot status",
  execute(message, args){
    message.channel.send("Ah i need to work **twice** now")
  },
};
