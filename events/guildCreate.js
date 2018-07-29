const {baselogger} = require('../logger.js');
const {RichEmbed} = require('discord.js')

module.exports = (bot, guild) => {

  let o = guild.owner

  baselogger(bot, `Guild Join\n\nName: ${guild.name}\n\nMembers: ${guild.memberCount}\n\nLarge: ${guild.large}`, guild.iconURL)
  console.log(`Guild Join\n\nName: ${guild.name}\n\nMembers: ${guild.memberCount}\n\nLarge: ${guild.large}
  
  
  let em = new RichEmbed()
  .setTitle("Welcome to Himiachi")
  .setDescription("Hello! I am Himiachi! Thanks for adding me. Here are a few tips on how to use me.")
  .addField("Moderation - Let me take care of the baddies. :smug:", "I have a good number of ")
}
