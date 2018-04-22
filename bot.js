const discord = require('discord.js'),
bot = new discord.Client(),
config = require('./config.json'),
prefix = process.env.prefix,
{baselogger} = require('./logger.js')
bot.login(process.env.token);

// ===Loading commands===

bot.commands = new discord.Collection()

require('fs').readdir("./commands/", (err, files) => {
  console.log("Loading commands...");
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});

// ===Done Loading commands===

bot.on('ready', () => {
  bot.user.setActivity(`for .help | ${bot.guilds.size} servers`, {type: "WATCHING"})
  console.log("Himiachi ready!")
  if (config.rotator == "yes") {
    require('./util/rotator.js')
  }
})

bot.on('message', message => {
  let mArray = message.content.split(" ")
  let args = mArray.slice(1)
  let cmd = bot.commands.get(mArray[0].slice(prefix.length))
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  
  if (cmd) {
    cmd.run(bot, message, args, discord)
    console.log(`${message.author.username} used the ${message.content.split(" ")[0]} command.`)
    baselogger(bot, `**Command Run**\n\n**Command:** ${message.content.split(" ")[0]}\n**User:** ${message.author.tag}\n**Message:** ${message.content}\n**Guild:** ${message.guild.name}\n**Channel:** ${message.channel.name}`);
  }
})
