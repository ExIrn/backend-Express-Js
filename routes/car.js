const router = require('express').Router()

const carController = require('../controllers/carController')

router.get('/car', carController.get)
router.post('/car',carController.create)
router.get('/car/:id', carController.getDataById)
router.put('/car/:id', carController.update)
router.delete('/car/:id', carController.delete)



module.exports = router