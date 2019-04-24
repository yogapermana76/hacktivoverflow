const router = require('express').Router()
const AnswerController = require('../controllers/answerController')
const { authenticate } = require('../middlewares/authenticate')

// router.use(authenticate)

router.get('/', AnswerController.findAllAnswer)
router.post('/', AnswerController.createAnswer)
router.put('/:id', AnswerController.updateAnswer)

module.exports = router