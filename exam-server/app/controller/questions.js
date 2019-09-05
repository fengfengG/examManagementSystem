'use strict';

const { Controller } = require('egg');

class ExamController extends Controller {
  async questions() {
    const result = await this.ctx.service.questions.questions();
    this.ctx.body = {
      code: 1,
      msg: 'is ok!',
      result,
    };
  }
}

module.exports = ExamController;
