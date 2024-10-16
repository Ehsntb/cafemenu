"use strict";
/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  const { nanoid } = await import("nanoid");

  await queryInterface.createTable("menuItems", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "categories", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    available: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    inventory: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    price: {
      type: Sequelize.DECIMAL,
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
  await queryInterface.dropTable("menuItems");
}
