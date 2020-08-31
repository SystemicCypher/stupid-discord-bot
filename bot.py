import os
import discord

TOKEN = 'npjs'

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
