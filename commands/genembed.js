module.exports.run = (bot, message, args, discord) => {
  let joinargs = args.join(" ");
  let em = new discord.RichEmbed()
  .setTitle("Embed Generator")
  .setDescription(joinargs)
  .setTimestamp()
  .setColor("PURPLE")
  .setFooter(`${message.author.username}'s generated embed.`)
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "genembed"
}
