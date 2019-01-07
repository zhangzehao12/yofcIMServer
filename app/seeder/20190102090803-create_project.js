'use strict';
const uuidv1 = require('uuid/v1');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('yofc_im_projects', [{
      projectId: uuidv1(),
      projectName: '项目一',
      describe: '项目一描述文字描述文字，不超过255',
    },
    {
      projectId: uuidv1(),
      projectName: '项目二',
      describe: '项目二描述文字描述文字，不超过255',
    },
    {
      projectId: uuidv1(),
      projectName: '项目三',
      describe: '项目三描述文字描述文字，不超过255',
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('yofc_im_projects');
  }
};
