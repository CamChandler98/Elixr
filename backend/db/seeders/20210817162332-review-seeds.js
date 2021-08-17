'use strict';

const { genReviews } = require("../../utils/seed-generation");
module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Reviews', genReviews(),{});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {truncate: true, cascade: true, restartIdentity: true});
}
};
