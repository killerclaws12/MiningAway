const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()
const config = require('../config.json')

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
            .setFooter(`MiningAway - VERSION ${config.Version}`)
            .setColor('#ad0707')
            .addFields(
                {
                    name: '`Economy Commands`',
                    value: '`>rob`, `>mine`,`>dig`,`>chop`,`>hoe`',
                    inline: true,
                },
                {
                    name: '`Other commands for Economy`',
                    value: '`>support`, `>pay (COMING SOON)`, `>shop`, `>buy` `>balance`,`>inventory`,`>sell`, `>build`',
                },
                {
                    name: '`User Commands`',
                    value: '`>math (COMING SOON)`, `>invite`, `>credit`, `>botinfo`, `>truth`, `>dare`, `>website`, `>github`'
                },
                 {
                    name: '`Moderation Commands (COMING SOON)`',
                    value: '`kick (coming soon)`',
                    inline: true,
                },
            )

        message.channel.send(help)
    }
} 
