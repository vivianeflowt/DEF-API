'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/list')

router.get('/api/list', controller.test)
router.post('/api/list', controller.create)
router.post('/api/list/drop', controller.drop)

module.exports = router
