module.exports.run = (bot, message, args, discord) => {        
    let member = message.mentions.members.first();
    let reason = args.join(' ');
    if (!args) {
        member.ban().then(message.channel.send(`Okay, just banned ${member.displayName}.`))
    } else {
        member.ban(reason).then(message.channel.send(`Okay, just banned ${member.displayName}.`))
    }
}

module.exports.help = {
    name: "ban"
}
                            
                           
