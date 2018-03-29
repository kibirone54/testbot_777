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
    buyrobots: 'Купить роботов',
    viprobots: 'VIP роботы',
    myrobots: 'Мои роботы',
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
            sendPictureScreen(msg.chat.id)
            break
        case ONE.back:
            bot.sendMessage(msg.chat.id, `WHAT NEXT`, {
                reply_markup: {
                    keyboard: [
                        [ONE.process1, ONE.shop1],
                        [TWO.balance1, TWO.invite1],
                        [THREE.exchange1, THREE.mingame],
                        [FOUR.other1, FOUR.settings1]
                ]
                }




            })
            break


    }
})

function sendPicture(chatId, picName) {
    const srcs = PicsScrs[picName]
    fs.readFile(`${__dirname}/pictures/${srcs}`, (error, picture) => {
        if (error) throw new Error(error)
        bot.sendPhoto(chatId, picture)
    })

    require('http').createServer().listen(process.env.PORT || 5000).on('request', function (req, res) {
        res.end('')
    })

}

function sendPictureScreen(chatId) {
    bot.sendMessage(chatId, `Выберите пункт меню:  `, {
            reply_markup: {
                keyboard: [
                    [ONE.buyrobots, ONE.viprobots],
                    [ONE.myrobots, ONE.back]


                ]


            }


        }
    )

}