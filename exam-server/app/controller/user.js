const { Controller } = require('egg')

class UserController extends Controller {
  async login() {
    const { user_name, user_pwd } = this.ctx.request.body
    const result = await this.ctx.service.user.login(user_name, user_pwd)

    console.log(result, 'resssss')
    this.ctx.body = {
      code: 1,
      msg: 'is ok!',
      result
    }
  }
  async addUser(ctx) {
    const results = await ctx.service.user.addUser(ctx.request.body);
    console.log(results);
    ctx.status = 200;
    ctx.body = {
      code: 1,
      msg: 'is ok addUser success',
    };
  }
  async getUserNameId(ctx) {
    ctx.body = await ctx.service.user.getUserNameId();
  }
  async updateUser(ctx) {
    const results = await ctx.service.user.updateUser(ctx.request.body);
    console.log(results);
    ctx.status = 200;
    ctx.body = {
      code: 1,
      msg: 'updateUser success',
    };
  }
  async getTypeList(ctx) {
    ctx.body = await ctx.service.user.getTypeList();
  }
  async getApiAuthority(ctx) {
    ctx.body = await ctx.service.user.getApiAuthority();
  }
  async getViewAuthority(ctx) {
    ctx.body = await ctx.service.user.getViewAuthority();
  }
}

module.exports = UserController;
