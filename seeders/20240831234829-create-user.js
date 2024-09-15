"use strict";
const bcrypt = require("bcrypt");

const { name } = require("tar/lib/types");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const Roles = await queryInterface.bulkInsert(
      "Roles",
      [
        {
          name: "SuperAdmin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    console.log(Roles);

    const superAdminUser = await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "superadmin",
          password:
            "$2a$10$YIjAO1cNc3QaBDv1EQ5dwuAmKvmBQScnA8o0aJm5DvcBTxywSjs3K",
          name: "superadmin",
          email: "admin@example.com",
          short_link: "/user?sl=superadmin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    console.log(superAdminUser);

    await queryInterface.bulkInsert("UserRoles", [
      {
        userId: superAdminUser,
        roleId: Roles,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserRoles", null, {});
    await queryInterface.bulkDelete("Users", { username: "admin" }, {});
    // await queryInterface.bulkDelete("Roles", { name: "SuperAdmin" }, {});
  },
};
