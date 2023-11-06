const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'authors'
    },
    genre: {
        type: Schema.Types.ObjectId,
        ref: 'genres'
    }
})

module.exports = mongoose.model('books', bookSchema)