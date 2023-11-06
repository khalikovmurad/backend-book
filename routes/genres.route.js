const { Router } = require('express')
const { genresController } = require('../controllers/genres.controller')
const router = Router()


router.get('/genres', genresController.getGenres)
router.post('/genres', genresController.createGenre)
router.delete('/genres/:id', genresController.deleteGenre)

module.exports = router;