const Author = require('../models/Author.model')


module.exports.authorsController = {
    getAuthors: (req, res) => {
        Author.find()
            .then(data => res.json(data))
            .catch(() => res.json({"error": "Не удалось получить записи"}))
    },
    createAuthor: (req, res) => {
        Author.create({
            name: req.body.name,
            description: req.body.description
        }).then(() => res.json('Record created'))
            .catch(() => res.json({ "error": "Ошибка при добавлении новой записи" }))
    },
    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.id).then(() => {
            res.json(`Record has been deleted`)
        }).catch(() => res.json({ "error": "Ошибка при удалении записи" }))
    }
}