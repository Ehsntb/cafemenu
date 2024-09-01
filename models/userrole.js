"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userRole.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" },
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "role", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "userRole",
      timestamps: true,
    }
  );
  return userRole;
};
