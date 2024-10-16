"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class userComplex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userComplex.belongsTo(models.Users, {
        foreignKey: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      userComplex.belongsTo(models.Complex, {
        foreignKey: "complexId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  userComplex.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      complexId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "complexes", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
