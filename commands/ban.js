if(command === "ban")
    if(!message.member.permission.some(r=>["ban members"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
