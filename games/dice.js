const Discord = require('discord.js')

const module_name = "Dice Roll"

function diceRoll(sides, starts = 1){
    return Math.floor(Math.random() * sides) + starts
}

const dice = (args, channel) => {
    var diceEmbed = new Discord.MessageEmbed()
                            .setTitle(module_name)

    diceEmbed.setDescription(`${Number(args[1])}-sided die roll\n\n${diceRoll(Number(args[1]))}`)
    channel.send(diceEmbed)
}

module.exports = dice