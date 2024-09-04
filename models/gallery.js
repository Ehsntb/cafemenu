"use strict";
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
    },
    {
      sequelize,
      modelName: "Galleries",
      timestamps: true,
    }
  );
  return Gallery;
};
