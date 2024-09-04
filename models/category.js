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
        defaultValue: function () {
          // Placeholder default value, can be adjusted or removed if necessary
          return `https://short.link/${nanoid(8)}`;
        },
      },
    },
    {
      sequelize,
      modelName: "Categories",
      hooks: {
        beforeCreate: async (Category, options) => {
          // Wait for ID generation if not using auto-generated IDs
          await Category.save();
          // Generate the short_link using the name and id
          Category.short_link = `/${Category.name.replace(/\s+/g, "_")}_${
            Category.id
          }`;
        },
      },
      timestamps: true,
    }
  );
  return Category;
};
