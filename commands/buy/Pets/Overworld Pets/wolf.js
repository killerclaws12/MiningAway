const Discord = require('discord.js')
const economy = require('../../../../economy')
const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['buy wolf', 'Buy wolf'],
  minArgs: 0,
  maxArgs: null,
  cooldown: 3,
  callback: async(message,arguments,text) => {
    const userId = message.author.id
    const coinspresent = await economy.getCoins(userId)
    var price = 10000

    if(coinspresent > 10000) {
      message.channel.send('Purchase Dog!')

     const remainingCoins = await economy.addCoins(
      userId,
      price * -1
    )
      var birchrandom = 1
      await economy.addItems( userId, birchrandom, 'wolf')
    } 
  }
}