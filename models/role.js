"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role.belongsToMany(models.userRole, {
        through: models.userRole,
        foreignKey: "roleId",
      });
    }
  }
  Role.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Roles",
      timestamps: true,
    }
  );
  return Role;
};
