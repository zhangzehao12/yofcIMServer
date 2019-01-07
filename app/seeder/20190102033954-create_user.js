'use strict';
const utils = require('utility');
const uuidv1 = require('uuid/v1');

module.exports = {
  up: (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('yofc_im_users', [{
      userId: uuidv1(),
      userName: 'lafeillou',
      password: utils.md5('123456'),
      projectId: uuidv1(),
    }])
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('yofc_im_users');
  }
};
