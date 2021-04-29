const economy = require('../economy.js')

module.exports = {
    commands: ['Dare', 'dare'],
    minArgs: 0,
    maxArgs: 100,
    cooldown: 3,
    callback: async(message, arguments, text) => {
        const userID = message.author.id
        var Cought1 = ('Your dare is:  ');
        var CA = ['Drink your pee', 'Tell your crush you like them', 'Let a friend slap you', 'Vote miningaway on top.gg', 'Act coco'];
        var People = CA[Math.floor(Math.random() * CA.length)];
        message.reply(Cought1 + People)
    }
}
