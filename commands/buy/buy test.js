const Discord = require('discord.js')
const economy = require('../../economy.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  commands: ['buy tester tools', 'Buy tester tools'],
  minArgs: 0,
  maxArgs: null,
  cooldown: 3,
  callback: async(message,arguments,text) => {
    if(!message.member.roles.cache.has('833450443426365462')){
      message.channel.send("You do not have permission to buy this!")
      return
    }
  
    const userId = message.author.id
    const coinspresent = await economy.getCoins(userId)
    var price = 0

    if(coinspresent > 0) {
      message.channel.send('Purchase Successful')
      const remainingCoins = await economy.addCoins(
      userId,
      price * -1
    )
      var birchrandom = 1
      await economy.addItems( userId, birchrandom, 'testertools')
    } 
  }
}
