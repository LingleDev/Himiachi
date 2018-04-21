module.exports.run = (bot, message, args, discord) => {
 let em = new discord.RichEmbed()
  .setTitle("Himiachi Invite")
  .setDescription(`https://discordapp.com/api/oauth2/authorize?client_id=410101842329075712&permissions=8&scope=bot`)
  .setColor("GREEN")
  .setThumbnail(bot.user.avatarURL)
  .setFooter(message.author.username)
  .setTimestamp()

   message.channel.send({embed: em})
  }

module.exports.help = {
 name: "invite",
 usage: ".invite"
 }
