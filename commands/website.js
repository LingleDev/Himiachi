module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("Himiachi Website")
  .setDescription("Check out my website [here](https://himiachi.ml/home)!")
  .setTimestamp()
  .setColor(`RANDOM`)
  .setFooter("Himiachi Website!")
  
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "website"
}
