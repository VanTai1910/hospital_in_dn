'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      email: 'ptai1910@gmail.com',
      password: '123456',
      firstName: 'Van',
      lastName: 'Tai',
      address: 'danang',
      gender: '1',
      typeRole: 'ROLL',
      keyRole: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
