'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('OAuthClients', [{
      clientId: '0gsrKsZ5j4In6lWfgEQNS',
      clientSecret: '78J_8GNW6lUbKyGe4_Wul',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      clientId: '224269501712885',
      clientSecret: 'e7ee37bddebe82c2ab4f5f5e947d7a5b',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('OAuthClients', null, {});
  }
};
