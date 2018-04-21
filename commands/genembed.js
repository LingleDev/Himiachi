module.exports.run = (bot, message, args, discord) => {
  let joinargs = args.join(" ");
  let em = new discord.RichEmbed()
  .setTitle("Embed Generator")
  .setDescription(joinargs)
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setColor("PURPLE")
  .setFooter(`${message.author.username}'s generated embed.`)
  message.delete(500)
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "genembed"
}
