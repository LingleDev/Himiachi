const discord = require('discord.js'),
bot = new discord.Client(),
config = require('./config.json'),
prefix = process.env.prefix;
bot.login(process.env.token);
