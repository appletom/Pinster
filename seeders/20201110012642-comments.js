'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comments', [{
      text: 'love this!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      text: 'nice work',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      text: 'loved this project, so easy to do',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
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
