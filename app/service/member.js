'use strict';

const Service = require('egg').Service;

class MemberService extends Service {
    /**
       * 新增用户
       * @param {object} 待插入记录字段
       * @return {object|null}-插入结果
       */
    async createMember(params) {
        return await this.app.model.User.Member.create(params);
    }

    /**
     * 获取用户列表，支持分页
     */
    async getUserList(params) {
        const Project = require('../model/project.js')(this.app);

        return await this.app.model.User.Member.findAndCountAll({
            attributes: ['userId', 'userName', 'orginPassword', 'created_at'],
            where: {
                projectId: params.projectId
            },
            include: [
                { model: Project, required: true }
            ],
            offset: params.start * 1,
            limit: params.length * 1
        })
    }
}

module.exports = MemberService;
