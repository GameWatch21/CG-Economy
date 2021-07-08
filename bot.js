const http = require("http");
const port = 8080;
const url = require('url');
const fetchs = require('node-fetch');
const fs = require("fs");
const Discord = require("discord.js");
const { prefix , token } = require("./config.json");
const client = new Discord.Client();
client.commands = new Discord.Collection();

http.createServer((req, res) => {
	let responseCode = 404;
	let content = '404 Error';
  let content2 = '404 Error';

	const urlObj = url.parse(req.url, true);

	if (urlObj.query.code) {
		const accessCode = urlObj.query.code;
		const data = {
			client_id: 'your client id',
			client_secret: 'your client secret',
			grant_type: 'authorization_code',
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

	if (urlObj.pathname === '/') {
		responseCode = 200;
		content = fs.readFileSync('./index.html')
  }

	res.writeHead(responseCode, {
		'content-type': 'text/html;charset=utf-8',
	});

 /* app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
*/
	res.write(content);
	res.end();
})
	.listen(port);

const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log(
    "Yup im online, and im ready to work"
    );
  client.user.setActivity(`s!help`), {
    type: "playing"
    };
 
  }); 

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

client.login(process.env.TOKEN);
