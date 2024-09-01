"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userComplex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userComplex.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" },
      },
      complexId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "complex", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "userComplex",
      timestamps: true,
    }
  );
  return userComplex;
};
