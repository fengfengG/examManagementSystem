const { Service } = require('egg')

class UserService extends Service {

  /**
   * 根据id查找相对应的token
   * @param {*传来的id} uid
   */
  async verify(uid) {
    const $sql = `select token from user where id='${uid}'`
    const result = await this.app.mysql.query($sql)
    return result[0].token
  }

  /**
   *登录功能
   * @param {*用户名} user_name
   * @param {*密码} user_pwd
   */
  async login(user_name, user_pwd) {
    console.log(user_name, user_pwd, 'made')
    const $sql = `select * from user where user_name='${user_name}' and user_pwd='${user_pwd}'`;
    const result = await this.app.mysql.query($sql)
    return result
  }
  async addUser(opt) {
    const { username, password, typeId } = opt;
    const $sql = 'insert into user (username, password,type) values (?,?,?)';
    return await this.app.mysql.query($sql, [username, password, typeId]);
  }
  async getUserNameId() {
    const $sql = 'select * from user';
    return await this.app.mysql.query($sql);
  }
  async updateUser(opt) {
    const { nameId, username, password, typeId } = opt;
    const $sql =
      'update user set username=?, password=?,type=? where username=?';
    return await this.app.mysql.query($sql, [
      username,
      password,
      typeId,
      nameId,
    ]);
  }
  async getTypeList() {
    const $sql = 'select * from identity';
    return await this.app.mysql.query($sql);
  }
  async getApiAuthority() {
    const $sql = 'select * from api_authority';
    return await this.app.mysql.query($sql);
  }
  async getViewAuthority() {
    const $sql = 'select * from view_authority';
    return await this.app.mysql.query($sql);
  }
}

module.exports = UserService