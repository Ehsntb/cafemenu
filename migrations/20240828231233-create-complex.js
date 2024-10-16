"use strict";

import flash from "express-flash";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Complexes", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.ENUM("cafe", "restaurant", "both"),
      allowNull: false,
      defaultValue: "both",
    },
    location: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    working_hours: {
      type: Sequelize.STRING,
    },
    working_days: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    short_link: {
      type: Sequelize.STRING,
      allowNull: false,
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
  await queryInterface.dropTable("Complexes");
}
