"use strict";
import flash from "express-flash";
import { Model } from "sequelize";
import { nanoid } from "nanoid";
import { bulkCreate } from "./qrcode";

export default (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Menu.belongsTo(models.Complex, {
        foreignKey: "complexId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Menu.hasMany(models.Category, {
        foreignKey: "menuId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Menu.hasMany(models.QRCode, {
        foreignKey: "menuId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Menu.init(
    {
      complexId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "complexes", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      name: { type: DataTypes.STRING, allowNull: false },
      number_of_tables: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      description: DataTypes.TEXT,
      short_link: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue: () => `${nanoid(8)}`,
      },
    },
    {
      sequelize,
      modelName: "Menus",
      timestamps: true,
      hooks: {
        afterCreate: async (menu, options) => {
          const qrCodes = [];
          for (let i = 1; i <= menu.number_of_tables; i++) {
            const qrCodeLink = `/menu?sl=${menu.short_link}&table=${i}`;
            qrCodes.push({
              menuId: menu.id,
              table_number: i,
              qr_code_link: qrCodeLink,
            });
          }
          await bulkCreate(qrCodes); // Insert multiple QR codes at once
        },
      },
    }
  );
  return Menu;
};
