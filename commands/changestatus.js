module.exports.run = (bot, message, args, discord) => {
  let status = args.join(' ');
  if (status == "online") {
    let em = new discord.RichEmbed()
    .setTitle("Status Changer")
    .setDescription(`Alright, I changed my status to Online.`)
    .setTimestamp()
    .setColor("GREEN")
    bot.user.setStatus("online")
  }
  
  if (status == "idle") {
  let em = new discord.RichEmbed()
  .setTitle("Status Changer")
  .setDescription(`Alright, I changed my status to Idle.`)
  .setTimestamp()
  .setColor("YELLOW")
    bot.user.setStatus("idle")
  }
  
  if (status == "dnd") {
  let em = new discord.RichEmbed()
  .setTitle("Status Changer")
  .setDescription("Alright, I changed my status to Do not Disturb.")
  .setTimestamp()
  .setColor("RED")
    bot.user.setStatus("dnd")
  }
  
  if (status == "offline") {
  let em = new discord.RichEmbed()
  .setTitle("Status Changer")
  .setDescription("Alright, I changed my status to Invisible.")
  .setTimestamp()
  .setColor("GREY")
    bot.user.setStatus("invisible")
  }
}

module.exports.help = {
  name: "changestatus"
}
