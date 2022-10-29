const express = require('express');
const mongoose = require('mongoose');
const Request = require('./models/Request');
const Manages = require('./models/Manages');
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
        tgcontact: req.query.tgcontact ? req.query.tgcontact : 'No data',
        wallet: req.query.wallet ? req.query.wallet : 'No data',
        val: req.query.val ? req.query.val : 'No data',
        is_canceled: '0',
        date: Date.now(),
        num: getRandomInt(999999),
        is_confirmed: '0'
    });
    newRequest.save();
      
    res.json({result: makeId})
});

app.get('/request', async (req, res) => {
    const id = req.query.id;
    const data = await Request.find({requestId: id})
    res.json(data)
});

app.get('/confirm', async (req, res) => {
    const id = req.query.id;
    
    const filter = { requestId: id };
    const update = { is_confirmed: '1' };
    
    let doc = await Request.findOneAndUpdate(filter, update);

    res.json({result:true})
});

app.get('/cancel', async (req, res) => {
    const id = req.query.id;
    
    const filter = { requestId: id };
    const update = { is_canceled: '1' };
    
    let doc = await Request.findOneAndUpdate(filter, update);

    res.json({result:true})
});

app.get('/manage/update/oHcOtPm6Vn4s0Hh3L3', async (req, res) => {
    const name = req.query.name;
    
    const filter = { name: name };
    const update = { coeficient: req.query.coeficient };
    
    let doc = await Manages.findOneAndUpdate(filter, update);

    res.json({result:true})
});


app.get('/manage/oHcOtPm6Vn4s0Hh3L3', async (req, res) => {
    
    let doc = await Manages.find();

    res.json(doc)
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
