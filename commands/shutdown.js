let config = require('../config.json')

module.exports.run = (bot, message, args, discord) => {
  if (config.ownerids.includes(message.author.id)) {
    let em = new discord.RichEmbed()
    .setTitle("Himiachi Shutdown")
    .setDescription(":wave: Shutting down :cry:")
    .setTimestamp()
    .setColor("BLACK")
    message.channel.send({embed: em})
    setTimeout(() => {
      bot.destroy();
      process.exit(143)
    }, 5000)
  } else {
    message.channel.send("Owner only, you cannot use this command.")
  }
}

module.exports.help = {
  name: "die"
}
