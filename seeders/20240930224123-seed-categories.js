"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        name: "Appetizers",
        menuId: 1, // ID of the menu (e.g., menu with ID 1)
        short_link: "cat1", // Use a valid short link here
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Main Courses",
        menuId: 1, // Same menu
        short_link: "cat2", // Use a valid short link here
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Desserts",
        menuId: 1, // Same menu
        short_link: "cat3", // Use a valid short link here
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Beverages",
        menuId: 2, // Different menu (e.g., menu with ID 2)
        short_link: "cat4", // Use a valid short link here
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Salads",
        menuId: 2, // Same menu
        short_link: "cat5", // Use a valid short link here
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cocktails",
        menuId: 3, // Linking to a different menu (e.g., menu with ID 3)
        short_link: "cat6", // Use a valid short link here
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
