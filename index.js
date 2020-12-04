const { DiscordAPIError } = require('discord.js')
const Discord = require('discord.js')
const game_handler = require('./games/cah.js')
const client = new Discord.Client()
const ENV = require('./config.js')
const pokemon_game = require('./games/pokemon.js')
const sheev = require('./memes/sheev.js')


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
client.on('message', msg => {
    if (msg.content.startsWith('!')){
        var args = msg.content.substring(1).toLowerCase().split(" ")
        const cmd = args[0]
        const channel = msg.channel

        switch(cmd){
            case "help":
                const embed = new Discord.MessageEmbed()
                                    .setTitle("Available Commands")
                                    .setDescription("All commands so far:\n!about\n!sheev\n!treason\n!power")
                channel.send(embed)
                break
            case "about":
                msg.reply("Hi! I'm a lil' bot. I don't do much, but I promise I'll get smarter in time!")
                break
            case "sheev":
                channel.send(sheev.PALPS_IMG)
                msg.reply(sheev.PALPS)
                break
            case "treason":
                channel.send(sheev.TREASON_IMG)
                msg.reply(sheev.TREASON)
                break
            case "power":
                channel.send(sheev.POWER_IMG)
                msg.reply(sheev.POWER)
                break
            case "cah":
                game_handler(args,msg,channel)
                break
            case "pokemon":
                pokemon_game(args, channel)
                break
        }
    }
});
  
client.login(ENV.TOKEN);