const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()

module.exports = {
    commands: 'support',
    minArgs: 0,
    maxArgs: 0,
    cooldown: 3,
    callback: (message, arguments, text) => {
       const embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Support Server!')
	.setURL('https://discord.gg/URmmt4nSxv')
	.setTimestamp()
	.setFooter(`Mr.Claws™#1111 - VERSION 0.0.2`);
        message.channel.send(embed)
    }
}
