const md5 = require('md5')

//加密token操作
module.exports.createToken = (uid) => {
    const token = JSON.stringify({
        uid,
        iis: 'wzgc',
        tim: new Date().getDate()
    })
    return md5(token)
}