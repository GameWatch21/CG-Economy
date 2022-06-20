const items = require('./models/items.js');

module.exports = {
    name: 'test',
    description: 'Just a test commamd',
    aliases: ['try'],
    execute(message, args) {
      message.channel.send(`${items.hoe}`)
    }
}
