/*
 * @Author: GF 
 * @Date: 2019-09-03 16:37:48 
 * @Last Modified by: GF
 * @Last Modified time: 2019-09-04 12:07:17
 */
'use strict';
const { Service } = require('egg')

class ClassService extends Service {
    async classManage() {
        const $sql = `select * from classmanage`
        const result = await this.app.mysql.query($sql)
        return result
    }
    async addClass(className, courseName, classSize) {
        const $sql = `INSERT INTO classmanage (className, courseName, classSize) VALUES (?,?,?)`
        const $params = [className, courseName, classSize]
        const result = await this.app.mysql.query($sql, $params)
        return result
    }
    async getCourse() {
        const $sql = `select * from classmanage`
        const result = await this.app.mysql.query($sql)
        return result
    }
    async getClassSize() {
        const $sql = `select * from classmanage`
        const result = await this.app.mysql.query($sql)
        return result
    }
    async deleClass(cid) {
        const $sql = `DELETE FROM classmanage WHERE  cid='${cid}'`
        const result = await this.app.mysql.query($sql)
        return result
    }
    async addRoom(classSize) {
        const $sql = `INSERT INTO room (size) VALUES (?)`
        const $params = [classSize]
        const result = await this.app.mysql.query($sql, $params)
        return result
    }
    async roomlist() {
        const $sql = `select * from room`
        const result = await this.app.mysql.query($sql)
        return result
    }
    async deleRoom(mid) {
        const $sql = `DELETE FROM room WHERE  mid='${mid}'`
        const result = await this.app.mysql.query($sql)
        return result
    }
}

module.exports = ClassService