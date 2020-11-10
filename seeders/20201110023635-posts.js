'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [{
      title: 'Easy Project',
      description: 'supplies you will need: ',
      createdAt:new Date(),
      updatedAt: new Date(), 
    },
    {
      title: 'DIY Project',
      description: 'supplies you will need:123 ',
      createdAt:new Date(),
      updatedAt: new Date(), 
    },
    {
      title: 'DIY Wall ART',
      description: 'supplies you will need: steps: 123',
      createdAt:new Date(),
      updatedAt: new Date(), 
    },
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
