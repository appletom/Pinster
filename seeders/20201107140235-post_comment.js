'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Post_comments', [{
      postID: 555,
      parentID: 1,
      title: "DIY Project",
      content: "nice worl!",
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      postID: 444,
      parentID: 2,
      title: "DIY Gallery Wall",
      content: "great instructions",
      createdAt: new Date(),
      updatedAt: new Date()
  }],
  {})
  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('Post_comments', null, {});
  }
};
