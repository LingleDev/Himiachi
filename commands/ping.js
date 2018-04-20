module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("Himiachi Ping")
  .setDescription(`Pong! My ping is ${bot.ping}ms.`)
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  .setFooter(message.author.username)
  .setColor("BLUE")
  message.channel.send({embed: em}).then(m => m.delete(10000))
}

module.exports.help = {
  name: "ping"
}
