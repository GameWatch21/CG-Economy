const db = require('quick.db');

{
  const stone = db.fetch(`stone.${message.author.id}`) || 0;
  const rock = db.fetch(`rock.${message.author.id}`) || 0;
  const coal = db.fetch(`coal.${message.author.id}`) || 0;
  const iron_ore = db.fetch(`iron_ore.${message.author.id}`) || 0;
  const gold_ore = db.fetch(`gold_ore.${message.author.id}`) || 0;
  const diamond_ore = db.fetch(`diamond_ore.${message.author.id}`) || 0;
  const iron = db.fetch(`iron.${message.author.id}`) || 0;
  const gold = db.fetch(`gold.${message.author.id}`) || 0;
  const diamond = db.fetch(`diamond.${message.author.id}`) || 0;
}