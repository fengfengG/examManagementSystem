'use strict';

const { Service } = require('egg');

class ExamService extends Service {
    async questions() {
        const $sql = `select * from questions_type`;
        const result = await this.app.mysql.query($sql)
        return result
    }
}

module.exports = ExamService;
