const Discord = require('discord.js');
require('dotenv').config()

const token = 'OTg4MDY1Njg5NDc2Njk0MDM2.GMgzxq.HyO7dAEH60gE5o1baQpzFhFLyCIV53-dpN-wAU';
const prefix = '/';
const { MessageEmbed } = require('discord.js');
const bot = new Discord.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES'
    ]
})

bot.on('ready', () => {
    console.log('${bot.user.tag} is now online.')
})

bot.login(process.env.token)

bot.on("message", message => {
    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    if(command === 'ping') {
        message.channel.send('Pong!');
    }
    if(command === 'test') {
        message.reply('Pong!');
    }
    if(command === 'testembed') {
        const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Some title')
            .setURL('https://discord.js.org/')
            .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addField('Inline field title', 'Some value here', true)
            .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
        message.reply([exampleEmbed]);
    }
})