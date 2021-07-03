const economy = require('../economy.js')
const discord = require('discord.js')

module.exports = {
    commands: ['policy', 'Policy'],
    minArgs: 0,
    maxArgs: 100,
    cooldown: 3,
    callback: async(message, args, client) => {
    let embed = new discord.MessageEmbed()
    .setTitle("__**MiningAway's Policy**__")
    .setDescription(`We have moved the policy command over to our [Github](https://github.com/killerclaws12/MiningAway-Docs)!`)
    .setColor("RANDOM")
    .setFooter(`Policy command`)
    .setTimestamp()
    .setImage('https://thumbs.dreamstime.com/b/policies-board-company-policy-check-list-140972653.jpg')
    
    message.channel.send(embed);
    }
}
