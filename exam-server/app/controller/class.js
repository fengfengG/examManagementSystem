/*
 * @Author: GF 
 * @Date: 2019-09-03 16:37:45 
 * @Last Modified by: GF
 * @Last Modified time: 2019-09-05 20:14:41
 */
'use strict';
const { Controller } = require('egg');

class ClassController extends Controller {
    /**
     * 获取班级数据
     */
    async classManage() {
        const result = await this.ctx.service.class.classManage()
        this.ctx.body = {
            code: 1,
            msg: 'is ok',
            result
        }
    }
    /**
     * 添加班级
     */
    async addClass() {
        const { className, classSize, courseName } = this.ctx.request.body
        const result = await this.ctx.service.class.addClass(className, courseName, classSize)
        this.ctx.body = {
            code: 1,
            msg: 'is ok!',
            result
        }
    }
    /**
     * 获取课程数据
     */
    async getCourse() {
        const result = await this.ctx.service.class.getCourse()
        this.ctx.body = {
            code: 1,
            msg: 'is ok',
            result
        }
    }
    /**
     * 获取教室号数据
     */
    async getClassSize() {
        const result = await this.ctx.service.class.getClassSize()
        this.ctx.body = {
            code: 1,
            msg: 'is ok',
            result
        }
    }
    /**
     * 删除班级数据
     */
    async deleClass() {
        const { cid } = this.ctx.request.body
        const result = await this.ctx.service.class.deleClass(cid)
        this.ctx.body = {
            code: 1,
            msg: 'is ok!',
            result
        }
    }
    /**
     * 添加教室号
     */
    async addRoom() {
        const { classSize } = this.ctx.request.body
        console.log(classSize, 'ssssssssss')
        const result = await this.ctx.service.class.addRoom(classSize)
        this.ctx.body = {
            code: 1,
            msg: 'is ok',
            result
        }
    }
    /**
     * 获取教室号
     *  */
    async roomlist() {
        const result = await this.ctx.service.class.roomlist()
        this.ctx.body = {
            code: 1,
            msg: 'is ok',
            result
        }
    }

    /**
     * 
     */
    async deleRoom() {
        const { mid } = this.ctx.request.body
        const result = await this.ctx.service.class.deleRoom(mid)
        this.ctx.body = {
            code: 1,
            msg: 'is ok!',
            result
        }
    }
}

module.exports = ClassController;
