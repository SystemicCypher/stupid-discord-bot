const { DiscordAPIError } = require('discord.js')
const Discord = require('discord.js')
const client = new Discord.Client()
const ENV = require('./config.js')

const palpatine = "Did you ever hear the Tragedy of Darth Plagueis the wise?\n \
I thought not. It's not a story the Jedi would tell you.\n \
It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life...\n \
He had such a knowledge of the dark side that he could even keep the ones he cared about from dying.\n \
The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself."
const palpatineImg = "https://i.kym-cdn.com/entries/icons/facebook/000/022/073/Did_you_ever_hear.jpg"

const treason = "It's treason then..."
const treasonImg = "https://thumbs.gfycat.com/FirmAmpleFossa-small.gif"

const powerImg = "https://thumbs.gfycat.com/AbsoluteComposedBagworm-size_restricted.gif"
const power = 'UNLIMITED POWER!!!!!'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
client.on('message', msg => {
    if (msg.content === '!about') {
        msg.reply("Hi! I'm a lil' bot. I don't do much, but I promise I'll get smarter in time!");
    }

    if (msg.content.startsWith('!repeat')) {
        msg.reply(msg.author.lastMessage.toString().replace('!repeat', ''))
    }

    if (msg.content === '!sheev') {
        msg.channel.send(palpatineImg)
        msg.reply(palpatine)
    }

    if (msg.content.startsWith('!treason')) {
        msg.channel.send(treasonImg)
        msg.reply(treason)
    }

    if (msg.content === '!power'){
        msg.channel.send(powerImg)
        msg.reply(power)
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