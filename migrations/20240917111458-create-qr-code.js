"use strict";
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("QRCodes", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    menuId: {
      type: Sequelize.INTEGER,
      references: {
        model: "menus",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      allowNull: false,
    },
    table_number: {
      type: Sequelize.INTEGER,
    },
    qr_code_link: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { isUrl: true },
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
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("QRCodes");
}
