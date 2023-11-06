const mongoose = require('mongoose')
const Schema = mongoose.Schema
const reviewSchema = new Schema({
    text: {
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'books'
    }
})

module.exports = mongoose.model('reviews', reviewSchema)