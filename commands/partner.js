const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()

module.exports = {
    commands:['partner', 'Partner'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 1,
    callback: (message, arguments, text) => {
        const help = new Discord.MessageEmbed()
            .setTitle('Partners')
            .setURL('https://discord.gg/URmmt4nSxv')
            .setAuthor(message.author.username)
            .setFooter(`Mr.Claws™
#1111 - VERSION 0.0.2`)
            .setColor('#ad0707')
            .addFields(
                {
                    name: '`Magicordia`',
                    value: '**Magicordia** |*Magicordia is a bot made by Squid, a discord version of the harry potter series.',
                    inline: true,
                }
            )

        message.channel.send(help)
    }
} 
