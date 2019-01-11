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
}

module.exports = MemberService;
