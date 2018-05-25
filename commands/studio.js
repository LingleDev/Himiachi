module.exports.run = (bot, message, args, discord) => {
 let em = new discord.RichEmbed()
 .setTitle("Our Studio!")
 .setDescription("Welp this is our studio!)
 .addField("Here's an invite!", `https://discord.gg/Ch5HEjj`)
 .setFooter(message.author.username)
 .setTimestamp()
 
    message.channel.send({embed: em})
    }
    
    module.exports.help = {
 name: "studio",
 usage: ".studio"
 }
