const discord = require('discord.js');
const money = require('./money/database.json');
bot = new discord.Client(),
config = require('./config.json'),
prefix = ".",
{baselogger} = require('./logger.js'),
fs = require('fs')
bot.login(process.env.token)

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

bot.on('guildMemberAdd', (member) => require('./events/guildMemberAdd.js')(bot, member))

bot.on('ready', () => {
  var statuses = ["over Himiachi Base", "bot moosic", "bot gamez"]
  var result = statuses[Math.floor(Math.random() * statuses.length)]
  bot.user.setActivity(`Loading Himiachi...`, {type: "STREAMING", url: "https://twitch.tv/freakinghulk"})
  setTimeout(() => {
    setInterval(() => {
      if (result == statuses[0]) {
        bot.user.setActivity(result, {type: "WATCHING"})
      }
   
      if (result == statuses[1]) {
        bot.user.setActivity(result, {type: "LISTENING"})
      }
   
      if (result == statuses[2]) {
        bot.user.setActivity(result, {type: "PLAYING"})
      }
    }, 25000)
  }, 10000)
    console.log("Himiachi ready!")
})
 // ==Rotator==

bot.on('message', message => {
  let mArray = message.content.split(" ")
  let args = mArray.slice(1)
  let cmd = bot.commands.get(mArray[0].slice(prefix.length))
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (!message.content.startsWith(prefix)) return;
  
  
if(!money[message.author.id]){
  money[message.author.id] = {
    money: 0
  };
}

let MonAmt = Math.floor(Math.random() * 1) + 1;
let BaseAmt = Math.floor(Math.random() * 1) + 1;
  console.log(`${MonAmt} ; ${BaseAmt}`)
  if(MonAmt === BaseAmt){
   money[message.author.id] = {
    money: money[message.author.id].money + MonAmt
   } 
   fs.writeFile('./money/database.json', JSON.stringify(money), (err) => {
   if (err) console.log(err)
   })
  }
  
  if (cmd) {
    if (config.ubl.includes(message.author.id)) return;
    cmd.run(bot, message, args, discord)
    console.log(`${message.author.username} used the ${message.content.split(" ")[0]} command.`)
    baselogger(bot, `**Command Run**\n\n**Command:** ${message.content.split(" ")[0]}\n**User:** ${message.author.tag}\n**Message:** ${message.content}\n**Guild:** ${message.guild.name}\n**Channel:** ${message.channel.name}`);
  }
})


