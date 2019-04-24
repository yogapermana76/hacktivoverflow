const Question = require('../models/question')

class QuestionController {

  static createQuestion(req, res) {
    Question.create({
      title: req.body.title,
      description: req.body.description,
      upVotes: [],
      downVotes: [],
      userId: req.body.userId
    })
      .then(question => {
        res.status(201).json(question)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findAllQuestion(req, res) {
    Question.find({})
      .populate('userId')
      .then(questions => {
        res.status(200).json(questions)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findOneQuestion(req, res) {
    Question.findById(req.params.id)
      .then(foundQuestion => {
        res.status(200).json(foundQuestion)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static updateQuestion(req, res) {
    Question.findByIdAndUpdate(req.params.id, {...req.body})
      .then(() => {
        res.status(200).json('success updated')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static deleteQuestion(req, res) {
    Question.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).json('success deleted')
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

}

module.exports = QuestionController