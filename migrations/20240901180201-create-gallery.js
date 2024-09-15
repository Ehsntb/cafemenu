"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const { nanoid } = await import("nanoid");

    await queryInterface.createTable("Galleries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      mediaUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mediaType: {
        type: Sequelize.ENUM("complex", "menu", "category", "item"),
        allowNull: false,
        // complex, menu, category, menu-item
      },
      mediaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Type: {
        type: Sequelize.ENUM("image", "video", "icon"),
        allowNull: false,
        // image, video, icon
      },
      short_link: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        defaultValue: () => `/gallery?sl=${nanoid(8)}`,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Galleries");
  },
};
