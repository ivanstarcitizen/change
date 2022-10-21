const {Schema, model} = require('mongoose')

const Request = new Schema({
    sendCrypto: String,
    num:String,
    getCrypto: String,
    sendAmount: {
        type: String
    },
    getAmount: {
        type: String
    },
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