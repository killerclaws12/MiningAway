const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()

module.exports = {
    commands: [`info emeralds`, `Info emeralds`, `info Emeralds`, `Info Emeralds`],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 3,
    callback: (message, arguments, text) => {
       const embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Emeralds')
	.addField(`Emeralds, Sells For : 22$ \n**Obtained By** \nWooden Tools, Stone Tools, Iron Tools, Gold Tools, Emerald Tools, Diamond tools`)
	.setTimestamp()
	.setFooter(`Mr.Claws™#1111 - VERSION 0.0.2`);
        message.channel.send(embed)
    }
}
