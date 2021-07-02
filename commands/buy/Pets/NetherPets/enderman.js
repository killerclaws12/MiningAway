const Discord = require('discord.js')
const economy = require('../../../../economy')
const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['buy enderman', 'Buy enderman'],
  minArgs: 0,
  maxArgs: null,
  cooldown: 3,
  callback: async(message,arguments,text) => {
    const userId = message.author.id
    const coinspresent = await economy.getCoins(userId)
    var price = 900000000

    if(coinspresent > 900000000) {
      message.channel.send(`Purchased Enderman!`)

     const remainingCoins = await economy.addCoins(
      userId,
      price * -1
    )

      var birchrandom = 1
      await economy.addItems( userId, birchrandom, 'enderman')
    } 
  }
}