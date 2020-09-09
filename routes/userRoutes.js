const router = require('express').Router()
const { User } = require('../models')

router.get('/users', (req, res) => {
  // leave empty to get back everything
  User.find()
    .populate('items')
    .then(item => res.json(item))
    .catch(err => console.log(err))
})


router.post('/users', (req, res) => {
  User.create(req.body)
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

router.put('/users/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router