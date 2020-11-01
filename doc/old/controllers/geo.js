'use strict'

const Geo = require('../models/Geo').GeoModel
//

exports.create = async (req, res) => {
    const result = req.body

    if (!result) {
        return res.status(400).send({ success: false, error: 'invalid data' })
    }

    const geo = new Geo({
        name: req.body.name || '',
        email: req.body.email || '',
        geo_data: req.body.geo_data || {},
    })

    await geo.save(function (err, doc) {
        if (err) return res.status(400).send({ success: false, error: err })
        return res.status(200).send({
            success: true,
        })
    })
}
