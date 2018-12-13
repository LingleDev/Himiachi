const {baselogger} = require('../logger.js')

module.exports = (bot, member) => {
  let guild = member.guild
  let channnel = guild.channels.find(c => c.name == 'welcome')
  
  if (!channel) {
    return;
  } else {
    channel.send(`${member.displayName || message.author.username} just joined ${guild.name}.`)
  }
}
