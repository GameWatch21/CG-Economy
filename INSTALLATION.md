# Installation Guide
Finally, i have time to write installation guide for those who fork this project
So i will give you some tips how to make your bot online 

- First
You will need to see `config.json` file, you can see there is `"prefix": s!`
change that whenever you want for your prefix
if you are asking "Where do i put my bot token?" well, you should read the second step

- Second
Now, you should create `.env` file
Inside this file you should put your token with
```
TOKEN="[YOUR BOT TOKEN]"
F_CREDITS="This bot created by GameWatch21" // You can change this if you want, F refer to Footer not respect
PREFIX=s! //This one is for help command, well even i want to use this too for command prefix, but eh still working on it
```
Inside the `.env` file, you can put whatever you want
To import what's inside the file, you can use `process.env.[KEY]` example: `process.env.TOKEN` and it will print your bot token (cool right?)

- Third
Make sure to install all the package, the most important is
• Discord.js (ver 12)
• quick.db (latest ver)
• parse-ms (latest ver)
• express (latest ver) For website
• querystring (latest ver) For website and command

- Fourth
erase the `json.sqlite` file, since it store my database
You willnt use database right? well even you use mine, it still separate but to reset the database, you can erase that file, then make new one (just delete it then you can use the database)
If you are saying that "sqlite is hard, i cant do database" that's why i use quick.db, it's an easy database, same function, but better for begginer (like me)

- Fifth
Now, lets try to make your bot online, if your bot not online after following this step, then probably i miss something with the guide, sorry 😂
But, if your bot online, congrats, you already did the guide succesfully and i didnt need to worry about my code
You can see the code isnt clean yet, i still use the comment tag instead of erasing them, because i need them sometime
So i need to use comment tag to remind myself sooner

- sixth (optional)
For you that want to make a website for your discord bot, for now im still learning about ejs (an js embed for website) you can change the port to your server hosting or repl or glitch, if it still not online, probably your html code print an error
If it not error there is a line saying "Listening to port blabla" in your console
That's mean your website is online :)

## Support
If you desperate, or this guide is stupid, you should join my support server or just dm me `GameWatch21#2121` (okay dont spam me)
And i will respond to you as soon as possible and help with your bot, dont give me access to your bot token because it's not safe to share it to other users especially me (just give me your ID Card, jk)

