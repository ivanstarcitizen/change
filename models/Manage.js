const {Schema, model} = require('mongoose')

const Manage = new Schema({
    name: String,
    coeficient: String
});

module.exports = model('Manage', Manage)
