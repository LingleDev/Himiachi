const {baselogger} = require('../logger.js')

module.exports = (bot, member) => {
  let guild = member.guild
  let channel = guild.channels.find('name', 'welcome')
  
  if (!channel) {
    return;
  } else {
    if (member.displayName) {
      channel.send(`Welcome to ${guild.name}, ${member.displayName}!`)
    } else {
      channel.send(`Welcome to ${guild.name}, ${member.user.username}!`)
    }
  }
}
