'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'avalon@camelot.kingdom',
        username: 'Nimue',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'Agatha',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'batildabladewitch',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {truncate: true, cascade: true, restartIdentity: true});
}
};
