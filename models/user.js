"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const { nanoid } = require("nanoid");
const { model } = require("mongoose");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsToMany(models.Role, {
        through: models.userRole,
        foreignKey: "userId",
      });
      Users.belongsToMany(models.Complex, {
        through: models.userComplex,
        foreignKey: "userId",
      });
    }
  }
  Users.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      short_link: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue: () => `/user?sl=${nanoid(8)}`,
      },
    },
    {
      sequelize,
      modelName: "Users",
      hooks: {
        beforeCreate: async (user, options) => {
          if (user.password) {
            // const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, 10);
          }
        },
        beforeUpdate: async (user, options) => {
          if (user.changed("password")) {
            // const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, 10);
          }
        },
      },
      timestamps: true,
    }
  );
  return Users;
};
