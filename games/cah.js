const Discord = require('discord.js')
/*
    The cards against humanity game
    it takes in a state, channel, and array of players
*/
const cards_against_humanity = (state = {}, channel, players = []) => {

}

const gameTitle = "Cards Against Humanity"

var game_state = {
    gameStarted : false,
    cards_in_hands : [], // This is ordered by index - matched to index of player in current players
    cards_played : [], // the cards currently in play
}
var current_players = []

const game_handler = (args, message, channel) => {
    if (args.length < 2){
        const low_command = new Discord.MessageEmbed()
                                    .setTitle('Cards Against Humanity')
                                    .setDescription("You didn't specify a command!\n\
                                    Commands are:\n\
                                    !cah join - to join the game\n\
                                    !cah leave - to leave the game\n\
                                    !cah players - to see who is in the game\n\
                                    !cah start - starts the game\n\
                                    !cah stop - stops the active game")
        message.reply(low_command)
    }
    else{
        switch(args[1]){
            /* 
                Allows the user to join the game
            */
            case 'join':
                current_players.push(message.author)
                const join_embed = new Discord.MessageEmbed()
                                        .setTitle(gameTitle)
                                        .setDescription(`${message.author.username} has joined the game!`)
                channel.send(join_embed)
                break
            /*
                Allows the player to leave the game
            */
            case 'leave':
                current_players = current_players.filter(function(val, idx, arr){
                    return val !== message.author
                })
                const leave_embed = new Discord.MessageEmbed()
                                        .setTitle(gameTitle)
                                        .setDescription(`${message.author.username} has left the game!`)
                channel.send(leave_embed)
                break
            /*
                Sends out the list of players
            */
            case 'players':
                if(current_players.length === 0){
                    const player_embed = new Discord.MessageEmbed()
                                                .setTitle(gameTitle)
                                                .setDescription('Nobody is in the game right now...')
                    channel.send(player_embed)
                    break
                }
                else{
                    var players = "The players currently in the game are: "
                    for(var i = 0; i < current_players.length; i++){
                        players += current_players[i].username + (current_players.length > 1 ? ", " : "")
                    }
                    const player_embed = new Discord.MessageEmbed()
                                                .setTitle(gameTitle)
                                                .setDescription(players)
                    channel.send(player_embed)
                    break
                }
            /*
                Start the game
            */
            case 'start':
                if(current_players.length < 3){
                    const sad_embed = new Discord.MessageEmbed()
                                            .setTitle(gameTitle)
                                            .setDescription("There aren't enough players to start the game. :cry:")
                    channel.send(sad_embed)
                } else {
                    const game_embed = new Discord.MessageEmbed()
                                            .setTitle(gameTitle)
                                            .setDescription("Starting game...")
                    channel.send(game_embed)
                    game_state.gameStarted = true

                }
            /* 
                End the game
            */
            case 'stop':
                var game_embed = new Discord.MessageEmbed()
                                        .setTitle(gameTitle)
                if(game_state.gameStarted){
                    game_embed.setDescription("Stopping game!\nHope you had fun!")
                    game_state.gameStarted = false
                }
                else{
                    game_embed.setDescription("There's no game running right now!")
                }
                channel.send(game_embed)
                
                
        }
    }
}

module.exports = game_handler