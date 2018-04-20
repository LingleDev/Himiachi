module.exports.run = (bot, message, args, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle("Himiachi Ping")
  .setDescription(`Pong! My ping is ${bot.ping}ms.`)
  .setTimestamp()
  .setColor("BLUE")
  console.log(`${message.author.username} used the ping command.`)
}

module.exports.help = {
  name: "ping"
}
