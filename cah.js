const Discord = require('discord.js')
/*
    The cards against humanity game
    it takes in a state, channel, and array of players
*/
const cards_against_humanity = (state = {}, channel, players = []) => {

}

var game_state = {}
var current_players = []

const game_handler = (args, message, channel) => {
    if (args.length < 2){
        message.reply("You didn't specify a command!")
    }
    else{
        switch(args[1]){
            case 'join':
                current_players.push(message.author)
                channel.send(`${message.author.username} has joined the game!`)
                console.log(current_players)
                break
            case 'leave':
                break
            case 'players':
                var players = "The players currently in the game are: "
                for(var i = 0; i < current_players.length; i++){
                    players += current_players[i].username + (current_players.length > 1 ? "" : ", ")
                }
                channel.send(players)
                break
        }
    }
}

module.exports = game_handler