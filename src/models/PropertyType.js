import Sequelize, { Model } from "sequelize";

class PropertyType extends Model {
  //
  static init(sequelize) {
    //
    this.prototype.connection = sequelize;

    const fields = {
      property_type_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      label: Sequelize.STRING,
      category: Sequelize.STRING,
      tags: Sequelize.STRING,
      child_tags: Sequelize.STRING,
    };

    super.init(fields, {
      tableName: "property_type",
      sequelize,
    });

    return this;
  }

  static associate(models) {
    // this.belongsTo(models.User, { foreignKey: "user_id", as: "users" });
    // this.hasMany(models.Integration, {
    //   foreignKey: "Property_id",
    //   as: "integrations",
    // });
  }
}

export default PropertyType;
