import os
import discord

TOKEN = 'NzQ2NTkwNDQ2MjY3OTI0NTI0.X0CiiQ.hpJ9WICIIbCPYLtVMBU1334LGLM'

client = discord.Client()

@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!~')

@client.event 
async def on_message(message):
    if message.author == client.user:
        return
    
    if message.content.startswith('$hello'):
        await message.channel.send('Hello! ~ <3')

client.run(TOKEN)