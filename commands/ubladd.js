const config = require('../config.json')

module.exports.run = (bot, message, args, discord) => {
  let id = args.join(' ')
  
  bot.fetchUser(id).then(user => {
  config.ubl.push(user.id)
  let em = new discord.RichEmbed()
  .setTitle("Himaichi User Blacklist")
  .setDescription(`Ok! I added ${user.username} to the user blacklist.`)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(`Added ${user.username} to the userblacklist.`)
  
  }).catch(err => {
    console.error(err)
    message.channel.send("Invalid ID!")
  })
}

module.exports.help = {
  name: "ubl add"
}
