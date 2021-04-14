const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()

module.exports = {
    commands: 'help',
    minArgs: 0,
    maxArgs: 0,
    cooldown: 1,
    callback: (message, arguments, text) => {
        const help = new Discord.MessageEmbed()
            .setTitle('Help Commands')
            .setURL('https://discord.gg/v2ftGAeNs3')
            .setAuthor(message.author.username)
            .setFooter(`Mr.Claws™#1111 - VERSION 0.0.2`)
            .setColor('#ad0707')
            .addFields(
                {
                    name: '`Economy Commands`',
                    value: '`>rob`, `>mine`,`>dig`,`>chop`,`>hoe`',
                    inline: true,
                },
                {
                    name: '`Other commands for Economy`',
                    value: '`>support`, `>pay (COMING SOON)`, `>balance`,`>inventory`,`>sell all`,',
                },
                {
                    name: '`User Commands`',
                    value: '`>math (COMING SOON)`, `>invite`'
                }
            )

        message.channel.send(help)
    }
} 
