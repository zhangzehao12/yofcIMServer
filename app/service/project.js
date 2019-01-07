'use strict';

const Service = require('egg').Service;

class ProjectService extends Service {
    /**
       * 查询所有项目
       * @param {object} { attributes, filter } - 条件
       * @return {object|null} - 查找结果
       */
    async getAllProjects({ attributes, filter = {} }) {
        return await this.app.model.Project.findAll({
            attributes,
            where: { ...filter },
        });
    };

    /**
     * 新增项目
     * @param {object} 待插入记录字段
     * @return {object|null}-插入结果
     */
    async createProject(params) {
        return await this.app.model.Project.create(params);
    }
}

module.exports = ProjectService;
