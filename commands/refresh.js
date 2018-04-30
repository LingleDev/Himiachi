const ownerids = require('../config.json').ownerids

module.exports.run = (bot, message, args, discord) => {
    if (ownerids.includes(message.author.id)) {
    let cmd = args.join(" ")
    if (!args) {
    message.channel.send("You must provide a command name to reload.")
} else {
          delete require.cache[require.resolve(`./${cmd}.js`)]
            message.channel.send(`Command ${cmd} has been reloaded.`)
        }
    } else {
        message.channel.send("Owner only, you cannot use this command.")
    }
}

module.exports.help = {
    name: "reload"
}
