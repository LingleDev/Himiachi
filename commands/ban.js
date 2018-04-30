module.exports.run = (bot, message, args, discord) => {
    if (!message.member.hasPermission(["BAN_MEMBERS"])) return;
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(' ');
    if (!args) {
        member.ban().then(message.channel.send(`Okay, just banned ${member.displayName}.`))
    } else {
        member.ban(reason).then(message.channel.send(`Okay, just banned ${member.displayName}.`))
    }
}

module.exports.help = {
    name: "ban"
}
                            
                           
