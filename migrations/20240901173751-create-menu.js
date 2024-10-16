"use strict";
/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  const { nanoid } = await import("nanoid");

  await queryInterface.createTable("Menus", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    complexId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "complexes", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    number_of_tables: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    description: {
      type: Sequelize.TEXT,
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
  await queryInterface.dropTable("Menus");
}
