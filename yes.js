const Discord = require("discord.js")

module.exports = {
    commands:['yes'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 1,
    callback: (message, arguments, text) => {
        message.channel.send('yes')
        message.author.send('Show an uncropped image to Mr.Claws™#1111 or any staff members in the support server, for a reward  \n\n  congrats on finding this')
    }
} 
