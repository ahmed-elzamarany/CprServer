const express = require('express')
const router = express.Router()


// note that all imports happen at the beggining of the file
const dataController = require('../controllers/data.controller')

router.get('/get', dataController.get)
router.post('/send', dataController.send)

module.exports = router