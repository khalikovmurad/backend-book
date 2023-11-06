const Review = require('../models/Review.model')


module.exports.reviewsController = {
    getReviews: (req, res) => {
        Review.find(req.query.book ? { book: req.query.book } : null).populate('book')
            .then(data => res.json(data))
            .catch(() => res.json({ "error": "Не удалось получить записи" }))
    },
    createReview: (req, res) => {
        Review.create({
            text: req.body.text,
            user: req.body.user,
            book: req.body.book
        }).then(() => res.json('Record created'))
            .catch(() => res.json({ "error": "Ошибка при добавлении новой записи" }))
    },
    deleteReview: (req, res) => {
        Review.findByIdAndDelete(req.params.id).then(() => {
            res.json(`Record has been deleted`)
        }).catch(() => res.json({ "error": "Ошибка при удалении записи" }))
    }
}