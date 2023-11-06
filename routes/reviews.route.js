const { Router } = require('express')
const { reviewsController } = require('../controllers/reviews.controller')
const router = Router()


router.get('/reviews', reviewsController.getReviews)
router.post('/reviews', reviewsController.createReview)
router.delete('/reviews/:id', reviewsController.deleteReview)

module.exports = router;