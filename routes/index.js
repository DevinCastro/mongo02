const router = require('express').Router()


// router.use('/', require('./viewRoutes.js'))
router.use('/api', require('./itemRoutes.js'))
router.use('/api', require('./userRoutes.js'))


module.exports = router
