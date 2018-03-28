const TelegramBot = require('node-telegram-bot-api')
const _ = require('lodash')
const fs = require('fs')
const TOKEN = "579228062:AAE2m-H2HKatsfi-6FoUJssYtrvr8Q4cEpc"
const bot = new TelegramBot(TOKEN, {
    polling: true
})

const ONE = {
    shop1: 'Магазин',
    process1: 'процесс',
    back: 'BACK'
}
const TWO = {
    balance1: 'баланс',
    invite1: 'пригласить'
}
const THREE = {
    exchange1: 'обмен',
    mingame: 'мини игра'
}
const FOUR = {
    settings1: 'Настройка',
    other1: 'Разное',

}
const PicsScrs = {
    [ONE.shop1]: [
        '1.jpeg'


    ]


}

bot.onText(/\/start/, msg => {
    console.log(msg)

    const text = `HELLO FROM KOREA,  ${msg.from.first_name}\n WHAT'S UP?`

    bot.sendMessage(msg.chat.id, text, {
        reply_markup: {
            keyboard: [
                [ONE.process1, ONE.shop1],
                [TWO.balance1, TWO.invite1],
                [THREE.exchange1, THREE.mingame],
                [FOUR.other1, FOUR.settings1]

            ]


        }


    })


})
bot.on('message', msg => {
    switch (msg.text) {
        case ONE.shop1:
            sendPicture(msg.chat.id, msg.text)
            break
        case ONE.process1:
            sendTextProc(msg.chat.id, msg.text)
            break

    }
})

function sendPicture(chatId, picName) {
    const srcs = PicsScrs[picName]
    fs.readFile(`${__dirname}/pictures/${srcs}`, (error, picture) => {
        if (error) throw new Error(error)
        bot.sendPhoto(chatId, picture)
    })
}

function sendTextProc(chatId, text2) {

    const text2 = `HELLO FROM KOREA,  ${msg.from.first_name}\n WHAT'S UP?`
    bot.sendMessage(chatId, text2)


}

require('http').createServer().listen(process.env.PORT || 5000).on('request', function (req, res) {
    res.end('')
})
/*
function sendTextProc(chatId1, text1) {
    const text2 = `ВАШ БАЛАНС, ${msg.from.first_name}\n 1488`
    bot.sendMessage(chatId1, text2)


}
*/
