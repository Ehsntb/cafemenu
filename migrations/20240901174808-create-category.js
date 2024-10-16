"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  const { nanoid } = await import("nanoid");

  await queryInterface.createTable("Categories", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    menuId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "menus", key: "id" },
    },
    short_link: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      defaultValue: () => `${nanoid(8)}`,
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
  await queryInterface.dropTable("Categories");
}
