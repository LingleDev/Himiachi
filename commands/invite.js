module.exports.run = (bot, message, args, discord) => {
 let em = new discord.RichEmbed()
  .setTitle("Himiachi Invite")
  .setDescription(`Invite me [here](https://discordapp.com/api/oauth2/authorize?client_id=445958003582173204&permissions=8&redirect_uri=https%3A%2F%2Fbot.himiachi.ml%2Fwebsite%2Fhome&response_type=code&scope=bot%20guilds "invite Himiachi").`)
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
