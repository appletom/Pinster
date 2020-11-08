'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Post', [{
      postID: 555,
      title: 'DIY Project',
      description: 'Do it Yourself',
      photo: null,
      createdAt: new Date(),
      updatedAt: new Date()
  }, 
  {
      postID: 444,
      title: 'DIY Gallery Wall',
      description: 'Steps to design your own gallery wall',
      photo: null,
      createdAt: new Date(),
      updatedAt: new Date()
  }],{});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Post', null, {});
  }
};
