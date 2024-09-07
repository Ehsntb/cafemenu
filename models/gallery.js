"use strict";
const nanoid = require("nanoid");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Gallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gallery.init(
    {
      mediaUrl: { type: DataTypes.STRING, allowNull: false },
      mediaType: { type: DataTypes.STRING, allowNull: false },
      mediaId: { type: DataTypes.INTEGER, allowNull: false },
      mediaType: { type: DataTypes.STRING, allowNull: false },
      short_link: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue: function () {
          // Placeholder default value, can be adjusted or removed if necessary
          return `/category/${nanoid(8)}`;
        },
      },
    },
    {
      sequelize,
      modelName: "Galleries",
      timestamps: true,
    }
  );
  return Gallery;
};
