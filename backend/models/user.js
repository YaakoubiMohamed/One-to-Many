const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let User = new Schema({
    nom:{
        type: String
    },
    prenom:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    telephone:{
        type: Number
    }
},{
    collection: 'users'
})

module.exports = mongoose.model('User', User)