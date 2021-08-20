'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Friends', [{userOneId:1, userTwoId:2}], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Friends', null, {truncate: true, cascade: true, restartIdentity: true});

  }
};
