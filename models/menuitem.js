"use strict";
const { Model } = require("sequelize");
const nanoid = require("nanoid");

module.exports = (sequelize, DataTypes) => {
  class menuItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  menuItem.init(
    {
      menuId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "menus", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "categories", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      price: { type: DataTypes.DECIMAL },
      short_link: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue: function () {
          // Placeholder default value, can be adjusted or removed if necessary
          return `/menu-item?nanoid=${nanoid(8)}`;
        },
      },
    },
    {
      sequelize,
      modelName: "menuItem",
      timestamps: true,
    }
  );
  return menuItem;
};
