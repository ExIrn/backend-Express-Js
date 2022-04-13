const router = require('express').Router()

const carRouter = require('./car')

router.use(carRouter)

module.exports = router