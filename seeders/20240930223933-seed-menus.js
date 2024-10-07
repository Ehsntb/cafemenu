"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Menus", [
      {
        complexId: 1, // ID of the complex (e.g., complex with ID 1)
        name: "Breakfast Menu",
        number_of_tables: 5,
        description:
          "A delightful breakfast menu featuring pancakes, omelets, and more.",
        short_link: "menu1", // Use a valid short link here
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        complexId: 1, // Same complex
        name: "Lunch Menu",
        number_of_tables: 2,
        description:
          "A delicious lunch menu with salads, sandwiches, and beverages.",
        short_link: "menu2", // Use a valid short link here
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        complexId: 2, // Another complex (e.g., complex with ID 2)
        name: "Dinner Menu",
        number_of_tables: 3,
        description:
          "An exquisite dinner menu with gourmet dishes and fine wine.",
        short_link: "menu3", // Use a valid short link here
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        complexId: 3, // Another complex (e.g., complex with ID 3)
        name: "Cocktail Menu",
        number_of_tables: 1,
        description: "A vibrant cocktail menu with a variety of drinks.",
        short_link: "menu4", // Use a valid short link here
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Menus", null, {});
  },
};
