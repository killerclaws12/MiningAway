const economy = require('../economy.js')

module.exports = {
    commands: ['truth', 'Truth'],
    minArgs: 0,
    maxArgs: 100,
    cooldown: 3,
    callback: async(message, arguments, text) => {
        const userID = message.author.id
        var Cought1 = ('Your truth is:  ');
        var CA = ['Did you drink your pee before?', 'Do you have a girlfriend?', 'Do you have a boy friend?', 'Who is your crush?', 'Are you secretly a god'];
        var People = CA[Math.floor(Math.random() * CA.length)];
        message.reply(Cought1 + People)
    }
}
