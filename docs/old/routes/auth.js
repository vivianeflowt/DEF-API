'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/auth')

router.post('/api/auth/login', controller.login)
router.get('/api/auth/logout', controller.logout)
router.get('/api/auth/subscription/:code', controller.subscription)

module.exports = router
