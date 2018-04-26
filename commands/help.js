module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("Himiachi Help Menu")
  .setDescription("This menu is a list of commands you can use with Himiachi.")
  .addField("Command Context", "Help")
  .addField("Bot Details", "Ping\nUptime\nInvite\n")
  .addField("Support", "Help\nSupport\nContact")
  .addField("Fun", "Genembed\nAnnoy\n")
  .addField("Guild Verification", "Verify\n")
  .addField("Moderation", "Ban\nKick\nHackban\nUnhackban\n")
  .addField("Bot Creators Only", "Eval\nChangeactivity\nRestart\nDie\nChangestatus\nReload\nAnnounce")
  .setColor("GREEN")
  .setThumbnail(bot.user.avatarURL)
  .setFooter(message.author.username)
  .setTimestamp()
  
  message.channel.send({embed: em}).then(m => m.delete(10000))
}

module.exports.help = {
  name: "help"
}
