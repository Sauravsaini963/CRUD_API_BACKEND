const express = require('express')

const router = express.Router()

router.use('/users', require('./userRoute'))
// router.use('/admin', require('./adminRoute'))


module.exports = router