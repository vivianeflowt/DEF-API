const express = require('express')
const router = express.Router()

const controller = require('../controllers/user')

router.post('/api/user/create', controller.create)

module.exports = router
