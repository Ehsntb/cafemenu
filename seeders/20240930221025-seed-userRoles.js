"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("userRoles", [
      {
        userId: 1, // ID of the user (e.g., superadmin)
        roleId: 1, // ID of the role (e.g., superadmin)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2, // ID of the user (e.g., admin)
        roleId: 2, // ID of the role (e.g., admin)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3, // ID of the user (e.g., manager)
        roleId: 3, // ID of the role (e.g., manager)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4, // Same user as above (manager)
        roleId: 4, // ID of the role (e.g., staff)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2, // Admin user
        roleId: 5, // ID of the role (e.g., customer)
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more associations as needed
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("userRoles", null, {});
  },
};
