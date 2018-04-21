module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("Himiachi Shutdown")
  .setDescription(":wave: Shutting down :cry:")
  .setTimestamp()
  .setColor("BLACK")
  message.channel.send({embed: em})
  setTimeout(() => {
    process.exit(143)
  }, 5000)
}

module.exports.help = {
  name: "die"
}
