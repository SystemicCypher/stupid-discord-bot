const { DiscordAPIError } = require('discord.js')
const Discord = require('discord.js')
const client = new Discord.Client()
const ENV = require('./config.js')
const sheev = require('./sheev.js')


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
client.on('message', msg => {
    if (msg.content === '!about') {
        msg.reply("Hi! I'm a lil' bot. I don't do much, but I promise I'll get smarter in time!");
    }

    if (msg.content === '!sheev') {
        msg.channel.send(sheev.PALPS_IMG)
        msg.reply(sheev.PALPS)
    }

    if (msg.content.startsWith('!treason')) {
        msg.channel.send(sheev.TREASON_IMG)
        msg.reply(sheev.TREASON)
    }

    if (msg.content === '!power'){
        msg.channel.send(sheev.POWER_IMG)
        msg.reply(sheev.POWER)
    }

    if (msg.content === '!game'){
        const embed = new Discord.MessageEmbed()
                            .setTitle('A Game Embed')
                            .setColor(0xaaaa00)
                            .setDescription('This is a game')
        msg.channel.send(embed)
    }
});



  
  client.login(ENV.TOKEN);