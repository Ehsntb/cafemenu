"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QRCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      QRCode.belongsTo(models.Menu, {
        foreignKey: "menuId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  QRCode.init(
    {
      menuId: {
        type: DataTypes.INTEGER,
        references: {
          model: "menus",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
      },
      table_number: { type: DataTypes.INTEGER, allowNull: false },
      qr_code_link: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isUrl: true },
      },
    },
    {
      sequelize,
      modelName: "QRCode",
    }
  );
  return QRCode;
};
