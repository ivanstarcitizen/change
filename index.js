const express = require('express');
const mongoose = require('mongoose');
const Request = require('./models/Request');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/create', (req, res) => {
    const makeid = () => {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 18; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
    }

    const makeId = makeid();

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

      
    const newRequest = new Request({
        requestId: makeId,
        sendCrypto: req.query.sendCrypto ? req.query.sendCrypto : 'No data',
        getCrypto: req.query.getCrypto ? req.query.getCrypto : 'No data',
        sendAmount: req.query.sendAmount ? req.query.sendAmount : 'No data',
        getAmount: req.query.getAmount ? req.query.getAmount : 'No data',
        card: req.query.card ? req.query.card : 'No data',
        cardName: req.query.cardName ? req.query.cardName : 'No data',
        telegram: req.query.telegram ? req.query.telegram : 'No data',
        wallet: req.query.wallet ? req.query.wallet : 'No data',
        date: Date.now(),
        num: getRandomInt(999999)
    });
    newRequest.save();
      
    res.json({result: makeId})
});

app.get('/request', async (req, res) => {
    const id = req.query.id;
    const data = await Request.find({requestId: id})
    res.json(data)
});



const mongooseConnection = async () => {
    await mongoose.connect('mongodb+srv://admin:sukapizdec22@cluster0.hpmjcg6.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
}
  
mongooseConnection();
  
app.listen(process.env.PORT || 3001, async () => {
    console.log('🚀 Server started...');
});
