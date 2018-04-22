const config = require('../config.json')
 var statuses = ["over Himiachi Base", "bot moosic", "bot gamez"]
 
module.exports = (bot) => {
  var result = statuses[Math.floor(Math.random() * statuses.length)]
  setInterval(() => {
    if (result == statuses[0]) {
      bot.user.setActivity(result, {type: "WATCHING"})
    }
   
   if (result == statuses[1]) {
    bot.user.setActivity(result, {type: "LISTENING"})
   }
   
   if (result == statuses[2]) {
    bot.user.setActivity(result, {type: "PLAYING"})
   }
  }, 25000)
}

module.exports = statuses
