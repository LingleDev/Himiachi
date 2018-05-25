module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("Our Studio!")
  .setDescription("Welp this is our studio!")
  .addField("Here's an invite!", `Join our server [here](https://discord.gg/Ch5HEjj "join the studio")`)
  .setFooter(`Requested by ${message.author.username}`)
  .setTimestamp()
  .setColor("BLUE")
 
  message.channel.send({embed: em})
}
    
module.exports.help = {
  name: "studio",
  usage: ".studio"
}
