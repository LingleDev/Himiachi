module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("Himiachi Help Menu")
  .setDescription("This menu is a list of commands you can use with Himiachi.")
  .addField("Command Context", "Help")
  .addField("Bot Details", "Ping")
  .setColor("BLUE")
  .setThumbnail(bot.user.avatarURL)
  .setFooter(message.author.username)
  .setTimestamp()
  
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "help"
}
