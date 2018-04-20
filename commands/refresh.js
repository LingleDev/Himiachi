module.exports.run = (bot, message, args, discord) => {
    if (!args) {
    message.channel.send("You must provide a command name to reload.")
} else {
      delete require.cache[require.resolve(`./${args[0]}.js`)]
      message.channel.send(`Command ${args[0]} has been reloaded.`)
    }
}
