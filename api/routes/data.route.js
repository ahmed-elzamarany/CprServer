const express = require('express')
const router = express.Router()


// note that all imports happen at the beggining of the file
const dataController = require('../controllers/data.controller')

router.post('/receive', dataController.receive)
router.post('/send', dataController.send)

module.exports = router