module.exports.run = (bot, message, args, discord) => {
 let em = new discord.RichEmbed()
  .setTitle("Himiachi Invite")
  .setDescription(`Invite me [here](https://discordapp.com/api/oauth2/authorize?client_id=445958003582173204&permissions=8&redirect_uri=https://discordbots.org/bot/445958003582173204&scope=bot guild "invite Himiachi").`)
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
