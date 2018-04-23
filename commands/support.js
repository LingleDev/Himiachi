module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("Himiachi Support Server")
  .setDescription("Click [here](https://discord.gg/Qf8Tskq) to join my support server.")
  .setColor("GREEN")
  .setThumbnail(bot.user.avatarURL)
  .setFooter(message.author.username)
  .setTimestamp()
  
  message.channel.send({embed: em}).then(m => m.delete(10000))
}

module.exports.help = {
  name: "support"
}
