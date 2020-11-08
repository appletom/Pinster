'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: "Anna",
      lastName: 'Smith',
      email: "annasmith@yahoo.com",
      username: "AnnaSmith",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
    firstName: "Jane",
      lastName: 'Williams',
      email: "janewilliams@example.com",
      username: "beauty20",
      createdAt: new Date(),
      updatedAt: new Date()
  }],
  {})
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
