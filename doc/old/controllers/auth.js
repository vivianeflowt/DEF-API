'use strict'
const jwt = require('jsonwebtoken')
const User = require('../models/User').UserModel
const checkPassword = require('../helpers/checkPassword')

exports.login = async (req, res) => {
    const result = req.body
    if (!result) {
        return res.status(400).send({ success: false, error: 'invalid data' })
    }
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ success: false, error: 'invalid data' })
    }
    await User.findOne(
        { email: req.body.email },
        'uid username password',
        function (err, user) {
            if (err) return res.status(400).send({ success: false, error: err })
            if (!user) return res.status(501).send({ access: denied })

            const password = req.body.password || ''

            if (!checkPassword(password) == user.password) {
                return res.status(501).send({ access: denied })
            }

            const uid = user.uid
            var token = jwt.sign({ uid }, process.env.SECRET, {
                expiresIn: 300, // expires in 5min
            })
            return res.status(200).send({ auth: true, token: token })
        }
    )
}

exports.logout = async (req, res) => {
    res.status(200).send({ auth: false, token: null })
}

exports.subscription = async (req, res) => {
    console.log(req.params.code)
    res.status(200).send({ code: req.params.code })
}
