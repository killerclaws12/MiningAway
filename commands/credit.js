const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()

module.exports = {
    commands: 'credit',
    minArgs: 0,
    maxArgs: 0,
    cooldown: 1,
    callback: (message, arguments, text) => {
        const credit = new Discord.MessageEmbed()
            .setTitle('Bot Credits')
            .setURL('https://discord.gg/URmmt4nSxv')
            .setAuthor(message.author.username)
            .setFooter(`Mr.Claws™#1111 - VERSION 0.0.2`)
            .setColor('#ad0707')
            .addFields(
                {
                    name: '`Developer`',
                    value: '`Mr.Claws™`, ``Mr.Claws™',
                    inline: true,
                },
                {
                    name: '`Discord Management`',
                    value: '`coming soon',
                },
                {
                    name: '`Testers`',
                    value: '`coming soon`'
                }
            )

        message.channel.send(credit)
    }
} 
