const { Router } = require('express')
const { authorsController } = require('../controllers/authors.controller')
const router = Router()


router.get('/authors', authorsController.getAuthors)
router.post('/authors', authorsController.createAuthor)
router.delete('/authors/:id', authorsController.deleteAuthor)

module.exports = router;