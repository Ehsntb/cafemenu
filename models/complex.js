"use strict";
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
      name: DataTypes.STRING,
      type: DataTypes.ENUM("cafe", "restuarant", "both"),
      location: DataTypes.STRING,
      address: DataTypes.STRING,
      description: DataTypes.STRING,
      working_hours: DataTypes.STRING,
      working_days: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      image_url: DataTypes.STRING,
      short_link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Complex",
    }
  );
  return Complex;
};
