const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let Book = new Schema({
    titre:{
        type: String
    },
    description:{
        type: String
    },
    date_publication:{
        type: String
    },
    userID:{
        type: String
    }
},{
    collection: 'books'
})

module.exports = mongoose.model('Book', Book)