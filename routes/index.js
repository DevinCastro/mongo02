const router = require('express').Router()


// router.use('/', require('./viewRoutes.js'))
router.use('/api', require('./itemRoutes.js'))


module.exports = router
