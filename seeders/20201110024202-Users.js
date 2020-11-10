'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Asher',
      lastName: 'Smith ',
      email: 'ashersmith@aol.com',
      username: 'ashherr3',
      password: 'password123',
      diyInterests: 'knitting',
      hobbies: 'projects',
      createdAt:new Date(),
      updatedAt: new Date(), 
    },
    {
      firstName: 'Jane',
      lastName: 'Doe ',
      email: 'janedoe@yahoo.com',
      username: 'janeydoe',
      password: 'ladybug34',
      diyInterests: 'sewing',
      hobbies: 'reading',
      createdAt:new Date(),
      updatedAt: new Date(), 
    },
    {
      firstName: 'Bob',
      lastName: 'Jackson',
      email: 'bobjackson@gmail.com',
      username: 'bobbycool',
      password: 'lovely56',
      diyInterests: 'woodworking',
      hobbies: 'diy projects',
      createdAt:new Date(),
      updatedAt: new Date(), 
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
