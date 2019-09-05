'use strict';

const { Service } = require('egg');

class ExamService extends Service {
  async examType() {
    const $sql = 'select * from exam_type';
    const result = await this.app.mysql.query($sql);
    return result;
  }
}

module.exports = ExamService;
