"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
        type: Sequelize.STRING,
        allowNull: false,
      },
      mediaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mediaType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      short_link: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        defaultValue: function () {
          // Placeholder default value, can be adjusted or removed if necessary
          return `/category/${nanoid(8)}`;
        },
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
