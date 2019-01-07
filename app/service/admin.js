'use strict';
const utils = require('utility');
const Service = require('egg').Service;

class AdminService extends Service {
    /**
     * 查找某个管理员
     * @param {string} userName -管理员账号
     * @param {string} password -管理员密码
     * @return {object|null} - 查找结果
     */
    async getAdminByLogin(userName, password) {
        return await this.app.model.User.Admin.findOne({
            where: { userName, password: utils.md5(password) }
        })
    }
}

module.exports = AdminService;
