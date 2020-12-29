'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [
      {
        name: "Pepen",
        profession: "Admin Micro",
        role: "admin",
        email: "pepen@mail.com",
        password: await bcrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Prastoyo",
        profession: "Front End Micro",
        role: "student",
        email: "prastoyo@mail.com",
        password: await bcrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
