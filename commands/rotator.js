let config = require('../config.json')
let offon = "on"

module.exports.run = (bot, message, args, discord) => {
  let toggle = args
  if (toggle == "on) {
    config.rotator = "yes"
    offon = "on"
  }
  if (toggle == "no") {
    config.rotator = "no"
    offon = "off"
  }
  
  let embed = new discord.RichEmbed()
  .setTitle("Status Rotator")
  .setDescription(`Turning the rotator ${offon}.`)
  .setTimestamp()
  .setColor("BLUE")
  .setThumbnail(bot.user.avatarURL)
  
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "toggle"
}
