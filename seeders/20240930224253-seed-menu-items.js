"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("menuItems", [
      {
        categoryId: 1, // ID of the category (e.g., category with ID 1)
        name: "Spring Rolls",
        description: "Crispy spring rolls filled with vegetables.",
        available: true,
        inventory: true,
        price: 5.99,
        short_link: "item1", // Use a valid short link here
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 1, // Same category
        name: "Garlic Bread",
        description: "Toasted bread topped with garlic and herbs.",
        available: true,
        inventory: true,
        price: 3.49,
        short_link: "item2", // Use a valid short link here
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2, // Linking to a different category (e.g., category with ID 2)
        name: "Margherita Pizza",
        description: "Classic pizza topped with fresh mozzarella and basil.",
        available: true,
        inventory: true,
        price: 12.99,
        short_link: "item3", // Use a valid short link here
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2, // Same category
        name: "Caesar Salad",
        description: "Crisp romaine lettuce with Caesar dressing and croutons.",
        available: true,
        inventory: true,
        price: 8.99,
        short_link: "item4", // Use a valid short link here
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3, // Linking to a different category (e.g., category with ID 3)
        name: "Chocolate Cake",
        description: "Rich and moist chocolate cake with frosting.",
        available: true,
        inventory: true,
        price: 6.99,
        short_link: "item5", // Use a valid short link here
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3, // Same category
        name: "Ice Cream Sundae",
        description: "Vanilla ice cream topped with chocolate sauce and nuts.",
        available: true,
        inventory: true,
        price: 4.49,
        short_link: "item6", // Use a valid short link here
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("menuItems", null, {});
  },
};
