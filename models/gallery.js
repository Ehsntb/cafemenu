"use strict";
import nanoid from "nanoid";
import { Model } from "sequelize";
import { nanoid } from "nanoid";

export default (sequelize, DataTypes) => {
  class Gallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Gallery.belongsTo(models.Menu, {
        foreignKey: "mediaId",
        constraints: false,
        scope: {
          mediaType: "menu",
        },
      });

      Gallery.belongsTo(models.Category, {
        foreignKey: "mediaId",
        constraints: false,
        scope: {
          mediaType: "category",
        },
      });

      Gallery.belongsTo(models.menuItem, {
        foreignKey: "mediaId",
        constraints: false,
        scope: {
          mediaType: "item",
        },
      });

      Gallery.belongsTo(models.Complex, {
        foreignKey: "mediaId",
        constraints: false,
        scope: {
          mediaType: "complex",
        },
      });
    }
  }
  Gallery.init(
    {
      mediaUrl: { type: DataTypes.STRING, allowNull: false },
      mediaType: {
        type: DataTypes.ENUM("complex", "menu", "category", "item"),
        allowNull: false,
      }, //complex, menu, category, menu-item
      mediaId: { type: DataTypes.INTEGER, allowNull: false },
      Type: {
        type: DataTypes.ENUM("image", "video", "icon"),
        allowNull: false,
      }, //image, video, icon
      short_link: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue: () => `/gallery?sl=${nanoid(8)}`,
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
