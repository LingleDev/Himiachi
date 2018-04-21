module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  let role = message.guild.roles.find('name', 'Verified')
  let member = message.member
  if (role) {
    member.addRole(role.id).then(role => {
      console.log(`${member.username} just got the ${role.name} role.`)
      em.setTitle("Himiachi Verification")
      em.setDescription(`You are now verified.`)
      em.setTimestamp()
      em.setColor("GREEN")
      em.setFooter("Verification")
      message.channel.send({embed: em})
    })
  } else {
    member.guild.createRole({
      name: "Verified",
      hoist: "false",
      color: "GREEN"
    }).then(role => {
      member.addRole(role.id)
      em.setTitle(`Himiachi Verification`)
      em.setDescription(`You are now verified.`)
      em.setTimestamp()
      em.setColor("GREEN")
      em.setFooter("Verification")
      message.channel.send({embed: em})
    })
  }
  if (member.hasRole(role.id)) {
    em.setTitle(`Himiachi Verification`)
    em.setDescription(`You already have this role!`)
    em.setTimestamp()
    em.setColor("RED")
    em.setFooter("Verification")
  }
}

module.exports.help.name: "verify"
