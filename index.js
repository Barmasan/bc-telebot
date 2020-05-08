const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.AAHazzIRAgxRt7FWyFUZUXnXePV_A3q0T38)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()