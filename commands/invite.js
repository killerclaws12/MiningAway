const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()

module.exports = {
    commands: 'invite',
    minArgs: 0,
    maxArgs: 0,
    cooldown: 3,
    callback: (message, arguments, text) => {
        const embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Invite Me To Your Server')
	.setURL('https://discord.com/api/oauth2/authorize?client_id=830890774383034379&permissions=8&scope=bot')
	.setTimestamp()
	.setFooter(`Mr.Claws™#1111 - VERSION 0.0.2`);
        message.channel.send(embed)
    }
}

