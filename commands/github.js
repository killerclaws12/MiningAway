const economy = require('../economy.js')
const discord = require('discord.js')

module.exports = {
    commands: ['github', 'Github'],
    minArgs: 0,
    maxArgs: 100,
    cooldown: 3,
    callback: async(message, args, client) => {
        let embed = new discord.MessageEmbed()
    .setDescription(`[Github is here](https://github.com/killerclaws12/MiningAway)`)
    .setTitle("__**Github**__")
    .setColor("RANDOM")
    .setFooter(`Github command`)
    .setTimestamp()
    
    message.channel.send(embed);
    }
}
