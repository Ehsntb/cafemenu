"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("QRCodes", [
      {
        menuId: 1,
        table_number: 1,
        qr_code_link: "https://example.com/menu?sl=menu1&table=1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menuId: 1,
        table_number: 2,
        qr_code_link: "https://example.com/menu?sl=menu1&table=2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menuId: 2,
        table_number: 1,
        qr_code_link: "https://example.com/menu?sl=menu2&table=1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menuId: 2,
        table_number: 2,
        qr_code_link: "https://example.com/menu?sl=menu2&table=2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menuId: 2,
        table_number: 3,
        qr_code_link: "https://example.com/menu?sl=menu2&table=3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menuId: 3,
        table_number: 1,
        qr_code_link: "https://example.com/menu?sl=menu3&table=1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("QRCodes", null, {});
  },
};
