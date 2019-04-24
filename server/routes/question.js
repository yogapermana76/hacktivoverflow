const router = require('express').Router()
const QuestionController = require('../controllers/questionController')
const { authenticate } = require('../middlewares/authenticate')

// router.use(authenticate)

router.get('/', QuestionController.findAllQuestion)
router.get('/:id', QuestionController.findOneQuestion)
router.post('/', QuestionController.createQuestion)
router.put('/:id', QuestionController.updateQuestion)
router.delete('/:id', QuestionController.deleteQuestion)

module.exports = router