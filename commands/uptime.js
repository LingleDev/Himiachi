module.exports.run = (bot, message, args, discord) => {
  var msgArray = [];
  var hrs = Math.round(bot.uptime / (1000 * 60 * 60)) + " hour(s),"
  var mins = " " + Math.round(bot.uptime / (1000 * 60)) % 60 + " minute(s), "
  var sec = Math.round(bot.uptime / 1000) % 60 + " second(s)"
  if (hrs == "0 hour(s),") hrs = ""
  if (mins == " 0 minute(s), ") mins = ""
  msgArray.push(hrs + mins + sec)
  let em = new discord.RichEmbed()
  .setTitle(`Himiachi Uptime`)
  .setDescription(`Serving ${bot.guilds.size} guilds, ${bot.channels.size} channels, and ${bot.users.size} users for ${msgArray}.`)
  .setTimestamp()
  .setColor("BLUE")
  .setFooter(`Himiachi Uptime`)
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "uptime",
  usage: ``,
  information: ""
}
