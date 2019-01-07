'use strict';

module.exports = app => {
    const adminSchema = require('../../../schema/admin.js')(app);
    const modelInstanceName = 'admin';

    const Admin = app.model.define(modelInstanceName, adminSchema, {
        freezeTableName: true,
        tableName: 'yofc_im_' + modelInstanceName
    });

    return Admin;
    /**
     * 查找管理员
     */
}