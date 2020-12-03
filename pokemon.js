const Discord = require('discord.js')

const pkmn_gif_dp = "https://www.serebii.net/pokedex-dp/icon/"
const pkmn_gif_filetype = ".gif"

const game_name = "Discordmon"

const pokemon_game = (args, channel) => {
    const pokemon_embed = new Discord.MessageEmbed()
                                .setTitle(game_name)
                                .setImage(pkmn_gif_dp + args[1] + pkmn_gif_filetype)
    channel.send(pokemon_embed)

}

module.exports = pokemon_game