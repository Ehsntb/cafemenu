"use strict";
const flash = require("express-flash");
const { Model } = require("sequelize");
const { nanoid } = require("nanoid");

module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Menu.init(
    {
      complexId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      name: { type: DataTypes.STRING, allowNull: false },
      number_of_tables: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      description: DataTypes.TEXT,
      short_link: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue: () => `/menu-item?sl=${nanoid(8)}`,
      },
    },
    {
      sequelize,
      modelName: "Menus",
      timestamps: true,
    }
  );
  return Menu;
};
