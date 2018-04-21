module.exports.run = (bot, message, args, discord) => {
 let em = new discord.RichEmbed()
  .setTitle("Comeing Soon!")
  .setDescription("This command is comeing soon!")
  .setColor("RED")
  .setThumbnail(bot.user.avatarURL)
  .setFooter(message.author.username)
  .setTimestamp()
   message.channel.send({embed: em})
