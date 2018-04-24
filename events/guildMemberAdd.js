const {baselogger} = require('../logger.js')

module.exports = (bot, member) => {
  let whiteguilds = ["410941412469637120"]
  member.send(`Hey <@${member.id}>! Thanks for joining ${member.guild.name}!`)
  if (whiteguilds.includes(member.guild.id)) {
    if (member.displayName) {
      baselogger(bot, `${member.displayName} joined ${member.guild.name}!`, bot.avatarURL)
      bot.channels.get('437056981405007872').send(`Welcome to ${member.guild.name}, @<${member.id}>! Glad to see you've joined! :grin:`)
      console.log(`${member.displayName} joined ${member.guild.name}.`)
    } else {
      baselogger(bot, `${member.username} joined ${member.guild.name}!`, bot.avatarURL)
      bot.channels.get('437056981405007872').send(`Welcome to ${member.guild.name}, @<${member.id}>! Glad to see you've joined! :grin:`)
      console.log(`${member.username} joined ${member.guild.name}.`)
    }
  } else {
      return;
  }
}
