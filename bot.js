const discord = require('discord.js'),
bot = new discord.Client(),
config = require('./config.json'),
prefix = process.env.prefix;
bot.login(process.env.token);

bot.on('ready', () => {
  bot.user.setActivity(`for .help | ${bot.guilds.size} servers`, {type: "WATCHING"})
  console.log("Himiachi ready!")
})

bot.on('message', message => {
  if (message.content == prefix+"help") {
    message.channel.send("I'm a fairly new bot, do you really think I have any commands yet?").then(m => m.delete(10000))
  }
})
