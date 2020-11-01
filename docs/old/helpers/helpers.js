module.exports.objectToUpperCase = (obj = {}) => {
    return JSON.parse(JSON.stringify(obj).toUpperCase())
}
