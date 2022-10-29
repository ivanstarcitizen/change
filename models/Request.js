const {Schema, model} = require('mongoose')

const Request = new Schema({
    is_canceled: String,
    tgcontact: String,
    val: String,
    is_confirmed: String,
    sendCrypto: String,
    num:String,
    getCrypto: String,
    sendAmount: {
        type: String
    },
    getAmount: {
        type: String
    },
    wallet: String,
    telegram: {
        type: String
    }, 
    card: {
        type: String
    },
    cardName: {
        type: String
    },
    date: {
        type: String
    },
    requestId: String
})

module.exports = model('Request', Request)
