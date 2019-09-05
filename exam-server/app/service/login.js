const { Service } = require('egg')

class LoginService extends Service {
    async userLogin(username, password) {
        const $sql = `select * from user where username='${username}' and password='${password}'`
        const result = await this.app.mysql.query($sql)
        return result
    }
}

module.exports = LoginService