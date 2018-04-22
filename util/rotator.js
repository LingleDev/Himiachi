const config = require('../config.json')
 var statuses = ["over Himiachi Base", "bot moosic", "bot gamez"]
 
module.exports = (bot) => {
  var result = statuses[Math.floor(Math.random() * statuses.length)]
  if (config.rotator == "yes") {
  setInterval(() => {
    if (result == statuses[0]) {
      bot.user.setActivity(result, {type: "WATCHING"})
    }
  }, 25000)
  } else {
    return;
  }
}

module.exports = statuses
