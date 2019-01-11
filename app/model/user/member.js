'use strict';

module.exports = app => {
    const userSchema = require('../../../schema/user.js')(app);
    const modelInstanceName = 'user';
    const Project = require('../project.js')(app);
    const Member = app.model.define(modelInstanceName, userSchema, {
        freezeTableName: true,
        tableName: 'yofc_im_' + modelInstanceName
    });
    // 一个用户归属于一个项目,一个项目有N个用户的关联关系
    Member.belongsTo(Project, { foreignKey: 'projectId', targetKey: 'projectId' });
    return Member;
}