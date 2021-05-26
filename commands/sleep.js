const economy = require('../economy.js')

module.exports = {
    commands: ['sleep', 'sleeping'],
    minArgs: 0,
    maxArgs: 100,
    cooldown: 3,
    callback: async(message, arguments, text) => {
        const userID = message.author.id
        var Cought1 = ('You slept for ');
        var CA = ['1 hour', '8 hours and you dreamed about stars', '2 until you died', '4 hours', '1 hour before you died', '10 hours while someone robbed you when you were sleeping'];
        var People = CA[Math.floor(Math.random() * CA.length)];
        message.reply(Cought1 + People)
    }
}
