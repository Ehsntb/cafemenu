"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("userComplexes", [
      {
        userId: 1, // ID of the user (e.g., user with ID 1)
        complexId: 1, // ID of the complex (e.g., complex with ID 1)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1, // Same user
        complexId: 2, // Different complex (e.g., complex with ID 2)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2, // Another user (e.g., user with ID 2)
        complexId: 1, // Linking to the same complex as user 1
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2, // Same user
        complexId: 3, // Linking to another complex
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3, // Another user (e.g., user with ID 3)
        complexId: 2, // Linking to a complex
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("userComplexes", null, {});
  },
};
