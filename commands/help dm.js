const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()

module.exports = {
    commands: 'helpdm',
    minArgs: 0,
    maxArgs: 0,
    cooldown: 1,
    callback: (message, arguments, text) => {
        const help = new Discord.MessageEmbed()
            .setTitle('Help Commands')
            .setURL('https://discord.gg/URmmt4nSxv')
            .setAuthor(message.author.username)
            .setFooter(`Mr.Claws™#1111 - VERSION 0.0.2`)
            .setColor('#ad0707')
            .addFields(
                {
                    name: '`Economy Commands`',
                    value: '`d!rob`, `d!mine`,`d!dig`,`d!chop`,`d!hoe`',
                    inline: true,
                },
                {
                    name: '`Other commands for Economy`',
                    value: '`d!support`, `d!pay`, `d!balance`,`d!inventory`,`d!sell all`,',
                },
                {
                    name: '`User Commands`',
                    value: '`d!math`'
                }
            )

        message.author.send(help)
    }
} 
