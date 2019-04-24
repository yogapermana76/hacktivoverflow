const Answer = require('../models/answer')

class AnswerController {

  static createAnswer(req, res) {
    Answer.create({
      title: req.body.title,
      description: req.body.description,
      upVotes: [],
      downVotes: [],
      questionId: req.body.questionId,
      userId: req.body.userId
    })
      .then(answer => {
        res.status(201).json(answer)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findAllAnswer(req, res) {
    Answer.find({})
      .populate('questionId')
      .populate('userId')
      .then(answer => {
        res.status(200).json(answer)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static updateAnswer(req, res) {
    Answer.findByIdAndUpdate(req.params.id, {...req.body})
      .then(() => {
        res.status(200).json('success updated')
      })
      .catch(err => {
        res.status(err)
      })
  }
}

module.exports = AnswerController