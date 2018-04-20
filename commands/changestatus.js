module.exports.run = (bot, message, args, discord) => {
  let status = args
  if (status == "online") {
    let em = new discord.RichEmbed()
    .setTitle("Status Changer")
    .setDescription(`Alright, I changed my status to Online.`)
    .setTimestamp()
    .setColor("GREEN")
    message.channel.send({embed: em})
    bot.user.setStatus("online")
  }
  
  if (status == "idle") {
  let em = new discord.RichEmbed()
  .setTitle("Status Changer")
  .setDescription(`Alright, I changed my status to Idle.`)
  .setTimestamp()
  .setColor("GOLD")
  message.channel.send({embed: em})
    bot.user.setStatus("idle")
  }
  
  if (status == "dnd") {
  let em = new discord.RichEmbed()
  .setTitle("Status Changer")
  .setDescription("Alright, I changed my status to Do not Disturb.")
  .setTimestamp()
  .setColor("RED")
  message.channel.send({embed: em})
    bot.user.setStatus("dnd")
  }
  
  if (status == "offline") {
  let em = new discord.RichEmbed()
  .setTitle("Status Changer")
  .setDescription("Alright, I changed my status to Invisible.")
  .setTimestamp()
  .setColor("GREY")
  message.channel.send({embed: em})
    bot.user.setStatus("invisible")
  }
}

module.exports.help = {
  name: "changestatus"
}
