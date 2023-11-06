const Genre = require('../models/Genre.model')


module.exports.genresController = {
    getGenres: (req, res) => {
        Genre.find()
            .then(data => res.json(data))
            .catch(() => res.json({"error": "Не удалось получить записи"}))
    },
    createGenre: (req, res) => {
        Genre.create({
            name: req.body.name,
            description: req.body.description
        }).then(() => res.json('Record created'))
            .catch(() => res.json({ "error": "Ошибка при добавлении новой записи" }))
    },
    deleteGenre: (req, res) => {
        Genre.findByIdAndDelete(req.params.id).then(() => {
            res.json(`Record has been deleted`)
        }).catch(() => res.json({ "error": "Ошибка при удалении записи" }))
    }
}