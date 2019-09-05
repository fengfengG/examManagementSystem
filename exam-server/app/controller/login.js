const { Controller } = require('egg')
const { createToken } = require('../utils/index.js')

class LoginController extends Controller {
    async userLogin() {
        const { username, password } = this.ctx.request.body
        const result = await this.ctx.service.login.userLogin(username, password)
        // console.log(result, 'ressss')
        if (result.length) {
            const token = createToken(result[0].id)
            // console.log(token, '加密后的token')
            const $sql = `update user set token ='${token}' where id='${result[0].id}'`
            await this.app.mysql.query($sql)

            this.ctx.status = 200
            this.ctx.body = {
                code: 1,
                uid: result[0].id,
                token
            }
        } else {
            this.ctx.status = 401
            this.ctx.body = {
                code: 0,
                msg: '登陆失败'
            }
        }
    }
}
module.exports = LoginController
