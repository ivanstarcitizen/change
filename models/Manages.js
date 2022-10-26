const {Schema, model} = require('mongoose')

const Manages = new Schema({
    name: String,
    coeficient: String
});

module.exports = model('Manages', Manages)
