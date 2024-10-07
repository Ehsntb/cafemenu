"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { nanoid } = await import("nanoid");
    const hashedpassword = await bcrypt.hash("test", saltRounds);

    return await queryInterface.bulkInsert("Users", [
      {
        username: "superadmin",
        password:
          "$2a$10$YIjAO1cNc3QaBDv1EQ5dwuAmKvmBQScnA8o0aJm5DvcBTxywSjs3K",
        name: "superadmin",
        email: "superadmin@example.com",
        short_link: "superadmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "admin",
        password: await bcrypt.hash("admin", saltRounds),
        name: "Admin User",
        phone: "1122334455",
        email: "admin@example.com",
        available: true,
        short_link: nanoid(8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "sarah",
        password: hashedpassword,
        name: "Sarah",
        phone: "123456789",
        email: "Sarah@example.com",
        available: true,
        short_link: nanoid(8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "jane_doe",
        password: hashedpassword,
        name: "Jane Doe",
        phone: "987654321",
        email: "jane.doe@example.com",
        available: true,
        short_link: nanoid(8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
