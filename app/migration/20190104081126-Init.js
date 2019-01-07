'use strict';

const fs = require('fs');
const path = require('path');
const folderPath = path.join('./', 'schema');
const uuidv1 = require('uuid/v1');
const utils = require('utility');
// 数据库前缀
const dbPrefix = 'yofc_im_';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    try {
      const files = fs.readdirSync(folderPath);
      // 初始化数据库
      for (const fileName of files) {
        const filePath = path.join('../../schema/', fileName);
        const schema = require(filePath)({ Sequelize });
        await queryInterface.createTable((dbPrefix + fileName).replace('.js', ''), schema);
      }
      // 添加管理员
      await queryInterface.bulkInsert(dbPrefix + 'admin', [{
        adminId: uuidv1(),
        userName: 'admin',
        password: utils.md5('admin'),
      }])
    } catch (e) {
      console.log(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropAllTables();
  }
};
