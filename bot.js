const discord = require('discord.js'),
const money = require('discord-money')
bot = new discord.Client(),
config = require('./config.json'),
prefix = ".",
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
  
  if (cmd) {
    if (config.ubl.includes(message.author.id)) return;
    cmd.run(bot, message, args, discord)
    console.log(`${message.author.username} used the ${message.content.split(" ")[0]} command.`)
    baselogger(bot, `**Command Run**\n\n**Command:** ${message.content.split(" ")[0]}\n**User:** ${message.author.tag}\n**Message:** ${message.content}\n**Guild:** ${message.guild.name}\n**Channel:** ${message.channel.name}`);
  }
})

bot.on('message', message => {
 
        // Prefix
        let prefix = '!';
 
        if (message.content.toUpperCase() === `!BALANCE`) {
 
            money.fetchBal(message.author.id).then((i) => { // money.fetchBal grabs the userID, finds it, and puts it into 'i'.
                message.channel.send(`**Balance:** ${i.money}`);
            })
 
 
        }
 
       
        if (message.content.toUpperCase() === `!PAY`) {
 
            money.updateBal(message.author.id, 500 /* Value */).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
                message.channel.send(`**You got $500!**\n**New Balance:** ${i.money}`);
            })
 
        }
 
        // Example: Removing Money From A User
        if (message.content.toUpperCase() === `!PAYFINE`) {
 
            money.updateBal(message.author.id, -500).then((i) => { // Since the 'value' is -500, it will 'add' -500, making the bal $500 lower.
                message.channel.send(`**You paid your fine of $500!**\n**New Balance:** ${i.money}`);
            })
 
        }
 
    
        if (message.content.toUpperCase() === ! + `DAILY`) {
                message.delete();
                if (money[message.author.username + message.guild.name] != moment().format('L')) {
                    money[message.author.username + message.guild.name] = moment().format('L')
                    money.updateBal(message.author.id, 500).then((i) => { // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
                        message.channel.send({embed: {
                            color: 3447003,
                            description: 'Recieved your **$500** \`!daily`\. I think you should check \`!money\`.',
                            author: {
                                name: `${message.author.username}#${message.author.discriminator}`,
                                icon_url: message.author.avatarURL 
                            }
                        }});
                    })
                } else {
                    message.channel.send({embed: {
                        color: 3447003,
                        description: 'You already recieved your \`!daily`\. Check later **' + moment().endOf('day').fromNow() + '**.', // When you got your daily already, this message will show up.
                        author: {
                            name: `${message.author.username}#${message.author.discriminator}`,
                            icon_url: message.author.avatarURL 
                        }
                    }});
                }
            }
 
 
    });
