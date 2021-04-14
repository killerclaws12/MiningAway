const { Discord, MessageEmbed } = require('discord.js')
const economy = require('../../economy.js')

module.exports = {
  commands: ['buy stone tools', 'Buy stone tools'],
  minArgs: 0,
  maxArgs: 10,
  cooldown: 1,
  callback: async(message, arguments, text) => {
    const item = "Stone Tools"
    const coinsOwned = await economy.getCoins(member.id)

    if(coinsOwner > 100000) {
      
    }
    const success = new Discord.MessageEmbed()
    .setTitle('Success!')
    .setDescription(`You have successfully bot ${item}`)
    .setAuthor(`${member.user.username}`)
    .setFooter('Mr.Claws™#1111')
  }
}