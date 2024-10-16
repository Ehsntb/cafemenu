"use strict";
import { Model } from "sequelize";
import { nanoid } from "nanoid";

export default (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.belongsTo(models.Menu, {
        foreignKey: "menuId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Category.hasMany(models.menuItem, {
        foreignKey: "categoryId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Category.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      menuId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "menus", key: "id" },
      },
      short_link: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue: () => `/category?sl=${nanoid(8)}`,
      },
    },
    {
      sequelize,
      modelName: "Categories",
      timestamps: true,
    }
  );
  return Category;
};
