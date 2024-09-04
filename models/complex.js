"use strict";
const flash = require("express-flash");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Complex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Complex.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      type: {
        type: DataTypes.ENUM("cafe", "restuarant", "both"),
        allowNull: false,
        defaultValue: "both",
      },
      location: DataTypes.STRING,
      address: DataTypes.STRING,
      description: DataTypes.STRING,
      working_hours: DataTypes.STRING,
      working_days: DataTypes.STRING,
      phone: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      short_link: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Complexes",
      timestamps: true,
    }
  );
  return Complex;
};
