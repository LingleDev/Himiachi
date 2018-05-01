module.exports.run = (bot, message, args, discord) => {
  let id = args.join(' ');
  if (!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("You don't have permission to ban people. If there's someone who needs to be banned, contact an administrator or a moderator.")
    bot.fetchUser(id).then(user => {
      message.guild.ban(id).catch(err => {
        message.channel.send("Failed to ban user "+id)
        console.log(err)
      })
      message.channel.send(`Alright, I banned the user ${id}.`)
    }).catch(() => {
      message.channel.send(`There's no user with the id of ${id}, please try again. :face_palm:`)
    })
}

module.exports.help = {
  name: "hackban"
}
