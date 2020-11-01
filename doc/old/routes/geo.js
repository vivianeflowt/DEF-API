'use strict'

const express = require('express')
const router = express.Router()

const controller = require('../controllers/geo')
const verifyJWT = require('../middlewares/jwt')

router.post('/api/geo', verifyJWT, controller.create)

module.exports = router
