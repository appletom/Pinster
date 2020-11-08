'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'postID', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Post',
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('Users','postID');
  }
};
