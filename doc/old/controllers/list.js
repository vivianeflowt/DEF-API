'use strict'

const uid = require('uid')
const List = require('../models/List').ListModel

exports.test = async (req, res, next) => {
    console.log(req.body)
    res.send('TEST : ' + JSON.stringify(req.body))
}

exports.create = async (req, res) => {
    const result = req.body
    if (!result) {
        return res.status(400).send({ success: false, error: 'invalid data' })
    }
    const list = new List({
        uid: uid(32).trim().toUpperCase(),
        email: req.body.email || '',
        password: req.body.password || '',
        title: req.body.title || '',
        subtitle: req.body.subtitle || '',
        description: req.body.description || '',
        keywords: req.body.keywords || [],
        public: req.body.public || true,
        active: req.body.active || false,
    })
    await list.save(function (err, doc) {
        if (err) return res.status(400).send({ success: false, error: err })
        return res.status(200).send({
            success: true,
            uid: doc.uid,
        })
    })
}
exports.store = async (req, res) => {
    if (err) return res.status(400).send({ success: false, error: err })
    return res.status(200).send({
        success: true,
        message: 'store',
    })
}
exports.find = async (req, res) => {
    if (err) return res.status(400).send({ success: false, error: err })
    return res.status(200).send({
        success: true,
        message: 'find',
    })
}
exports.findOne = async (req, res) => {
    if (err) return res.status(400).send({ success: false, error: err })
    return res.status(200).send({
        success: true,
        message: 'findOne',
    })
}
exports.findById = async (req, res) => {
    if (err) return res.status(400).send({ success: false, error: err })
    return res.status(200).send({
        success: true,
        message: 'findById',
    })
}
exports.update = async (req, res) => {
    if (err) return res.status(400).send({ success: false, error: err })
    return res.status(200).send({
        success: true,
        message: 'update',
    })
}
exports.delete = async (req, res) => {
    if (err) return res.status(400).send({ success: false, error: err })
    return res.status(200).send({
        success: true,
        message: 'delete',
    })
}

exports.drop = async function (req, res) {
   .status(200).send({
            succes List.remove({}, function (err) {
        if (err) return res.status(400).send({ success: false, error: err })
        console.log('collection removed')
        return ress: true,
        })
    })
}
