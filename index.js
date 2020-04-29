const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '1062938753:AAEM81k-Zp7Jt1VUJ4KDIq_PiH0n2VaCUaM';

const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', msg => {

    bot.sendMessage(msg.chat.id, `Привет ${msg.from.first_name}!!! Меня зовут Федор`);
} )

