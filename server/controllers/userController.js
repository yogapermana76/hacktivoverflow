const User = require('../models/user')
const { compare } = require('../helpers/bcrypt')
const { sign } = require('../helpers/jwt')

class UserController {

  static register(req, res) {
    User.findOne({
      email: req.body.email
    })
      .then(foundUser => {
        if(!foundUser) {
          return User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
          })
        } else {
          return new Promise(resolve => {
            resolve({
              status: 401,
              error: true,
              message: 'email already exists'
            })
          })
        }
      })
      .then(user => {
        if(user.error) {
          res.status(401).json(user.message)
        } else {
          res.status(201).json(user)
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findAllUser(req, res) {
    User.find({})
      .then(users => {
        res.status(200).json(users)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static login(req, res) {
    User.findOne({
      email: req.body.email
    })
      .then(foundUser => {
        if(!foundUser) {
          res.status(401).json({ message: 'email not found' })
        } else {
          const verifyPassword = compare(req.body.password, foundUser.password)
          if(!verifyPassword) {
            res.status(401).json({ message: 'password is wrong' })
          } else {
            const { id, name, email } = foundUser
            let token = sign({
              id: foundUser.id,
              name: foundUser.name,
              email: foundUser.email
            }, process.env.JWT_SECRET)
            res.status(200).json({ id, name, email, token })
          }
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

}

module.exports = UserController