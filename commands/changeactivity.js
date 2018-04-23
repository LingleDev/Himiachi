const config = require('../config.json')

module.exports.run = (bot, message, args, discord) => {
if (config.ownerids.includes(message.author.id)) {
  if (!args) {
    let embed=new discord.RichEmbed()
    .setTitle("Activity Changer")
    .setDescription("Okay! I changed my activity back to normal.")
  
      message.channel.send(
    }
  }
}
