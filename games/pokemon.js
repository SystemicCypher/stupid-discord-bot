const Discord = require('discord.js')

const game_name = "Discordmon"

function getPKMNImage(pokemon_number){
    var stringified_num = ""
    if(pokemon_number < 10){
        stringified_num = "00" + pokemon_number;
    }
    else if(pokemon_number < 100){
        stringified_num = "0" + pokemon_number;
    }
    else{
        stringified_num = "" + pokemon_number;
    }
    return ("https://www.serebii.net/pokedex-dp/icon/"+ stringified_num + ".gif")
}

const pokemon_game = (args, channel) => {
    const pokemon_embed = new Discord.MessageEmbed()
                                .setTitle(game_name)
                                .setImage(getPKMNImage(args[1]))
    console.log(args[1])
    channel.send(pokemon_embed)

}

module.exports = pokemon_game