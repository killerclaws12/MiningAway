const economy = require('../economy.js')
const discord = require('discord.js')

module.exports = {
    commands: ['website', 'Website'],
    minArgs: 0,
    maxArgs: 100,
    cooldown: 3,
    callback: async(message, args, client) => {
        let embed = new discord.MessageEmbed()
    .setDescription(`[Website is here](https://miningaway1.glitch.me/)`)
    .setTitle("__**Website**__")
    .setColor("RANDOM")
    .setFooter(`Website command`)
    .setTimestamp()
    
    message.channel.send(embed);
    }
}
