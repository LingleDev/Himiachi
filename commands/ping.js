module.exports.run = (bot, message, args, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle("Himiachi Ping")
  .setDescription(`Pong! My ping is ${bot.ping}ms.`)
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  .setFooter(message.author.avatarURL, message.author.username)
  .setColor("BLUE")
  message.channel.send({embed: embed })
}

module.exports.help = {
  name: "ping"
}
