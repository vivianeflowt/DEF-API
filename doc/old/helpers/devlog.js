module.exports = function (context = '', message = '') {
    const msg =
        '@ ' +
        context.padEnd(12, ' ').trim().toUpperCase() +
        ' ' +
        message.trim().toUpperCase()
    console.log(msg)
}
