"use strict";
const { Model } = require("sequelize");
const { nanoid } = require("nanoid");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      complexId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "complexes", key: "id" },
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
