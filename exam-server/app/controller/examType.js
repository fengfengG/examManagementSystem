'use strict';

const { Controller } = require('egg');

class ExamController extends Controller {
  async examType() {
    const result = await this.ctx.service.examType.examType()
    this.ctx.body = {
      code: 1,
      msg: 'is ok!',
      result
    }
  }
}

module.exports = ExamController;
