module.exports.run = (bot, message, args, discord) => {
 let member = message.mentions.members.first();
 let em = new discord.RichEmbed()
  .setTitle("Himiachi Annoy")
  .setDescription(`Now annoying <@${member.id}>...`)
  .setColor("RED")
  .setThumbnail(bot.user.avatarURL)
  .setFooter(message.author.username)
  .setTimestamp()
   bot.users.get(member.id).send(`<@${member.id}> LOL! ${message.author.username} sent me to annoy you! <@${member.id}> <@${member.id}>`)
   message.channel.send({embed: em})
}

module.exports.help = {
 name: "annoy",
 usage: ".annoy [@member]"
}
