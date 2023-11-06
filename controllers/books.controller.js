const Book = require('../models/Book.model')


module.exports.booksController = {
    getBooks: (req, res) => {
        Book.find(req.query.genre ? { genre: req.query.genre } : null).populate('author genre')
            .then(data => res.json(data))
            .catch(() => res.json({ "error": "Не удалось получить записи" }))
    },
    getBook: (req, res) => {
        Book.findById(req.params.id).populate('author genre')
            .then(data => res.json(data))
            .catch(() => res.json({ "error": "Не удалось получить записи напитков" }))
    },
    createBook: (req, res) => {
        Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre
        }).then(() => res.json('Record created'))
            .catch(() => res.json({ "error": "Ошибка при добавлении новой записи" }))
    },
    deleteBook: (req, res) => {
        Book.findByIdAndDelete(req.params.id).then(() => {
            res.json(`Record has been deleted`)
        }).catch(() => res.json({ "error": "Ошибка при удалении записи" }))
    },
    patchBook: (req, res) => {
        Book.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre
        }).then(() => {
            res.json(`Record changed`)})
            .catch(() => res.json({ "error": "Ошибка при изменении записи" }))
    }
}