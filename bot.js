//To make a website working on node.js
const http = require("http");
//For the website port
const port = 8080;
const url = require('url');
const fetchs = require('node-fetch');
//To read file on a folder
const fs = require("fs");
//Variable for discordjs
const Discord = require("discord.js");
//Importing your information from config.jsom
const { prefix , token , mongodb_uri , status , clientid , clientsecret , grandtype } = require("./config.json");
//Make the discord client
const client = new Discord.Client();
//Variable for mongodb
const mongoose = require('mongoose');
// [WEBSITE CODE]
http.createServer((req, res) => {
	let responseCode = 404;
	let content = '404 Error';
  let content2 = '404 Error';

	const urlObj = url.parse(req.url, true);
  
  // upcoming feature to use discord login
	if (urlObj.query.code) {
		const accessCode = urlObj.query.code;
		const data = {
			client_id: clientid,
			client_secret: clientsecret,
			grant_type: grandtype,
			redirect_uri: 'https://discord.com/api/oauth2/authorize?client_id=694134339465642014&redirect_uri=https%3A%2F%2Fcodeground-cg.glitch.me%2F&response_type=code&scope=identify',
			code: accessCode,
			scope: 'the scopes',
		};  	fetch('https://discord.com/api/oauth2/token', {
			method: 'POST',
			body: new URLSearchParams(data),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
			.then(discordRes => discordRes.json())
			.then(info => {
				console.log(info);
				return info;
			})
			.then(info => fetch('https://discord.com/api/users/@me', {
				headers: {
					authorization: `${info.token_type} ${info.access_token}`,
				},
			}))
			.then(userRes => userRes.json())
			.then(console.log);
	}
  // will be updated when more page is added
	if (urlObj.pathname === '/') {
		responseCode = 200;
		content = fs.readFileSync('./index.html')
  }

	res.writeHead(responseCode, {
		'content-type': 'text/html;charset=utf-8',
	});

	res.write(content);
	res.end();
})
	.listen(port);
// [WEBSITE CODE END]

// [COMMAND READ]
const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const commands = require(`./commands/${file}`);
  client.commands(commands.name, commands);
}
// [COMMAND READ END]

// [MONGODB CONNECT]
// for future mondodb extenstion
mongoose.connect(mongodb_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
  }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Unable to connect to MongoDB Database.\nError: ' + err);
    });
 // [MONGODB CONNECT END]
 
 // [DISCORD ONLINE CHECK]
client.once("ready", () => {
  console.log(
    "Yup im online, and im ready to work"
    );
 // [DISCORD ONLINE CHECK END]
 
 // [DISCORD BOT STATUS]
  client.user.setActivity(status), {
    type: "playing"
    };
 // [DISCORD BOT STATUS END]
  }); 

// [DISCORD MAIN COMMAND]
client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      cmd => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
});
// [DISCORD MAIN COMMAND END]

client.login(token);
