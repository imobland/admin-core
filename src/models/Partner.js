import Sequelize, { Model } from "sequelize";
import _ from "lodash";

class Partner extends Model {
  //
  static init(sequelize) {
    //
    const fields = {
      ref: Sequelize.STRING,
      name: Sequelize.STRING,
      pattern: Sequelize.STRING,
      description: Sequelize.STRING,
      category: Sequelize.STRING,
      website: Sequelize.STRING,
      tags: {
        type: Sequelize.STRING,
        defaultValue: "",
        get: function () {
          const tags = this.getDataValue("tags");
          return tags ? tags.split(" ") : [];
        },
        set: function (value) {
          this.setDataValue("tags", value.join(" "));
        },
      },
      config: {
        type: Sequelize.TEXT,
        defaultValue: "{}",
        get: function () {
          return JSON.parse(this.getDataValue("config"));
        },
        set: function (value) {
          this.setDataValue("config", JSON.stringify(value));
        },
      },
      contact: {
        type: Sequelize.TEXT,
        defaultValue: "{}",
        get: function () {
          return JSON.parse(this.getDataValue("contact"));
        },
        set: function (value) {
          this.setDataValue("contact", JSON.stringify(value));
        },
      },
      documentation: {
        type: Sequelize.TEXT,
        defaultValue: "{}",
        get: function () {
          return JSON.parse(this.getDataValue("documentation"));
        },
        set: function (value) {
          this.setDataValue("documentation", JSON.stringify(value));
        },
      },
      enabled: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
    };

    super.init(fields, {
      sequelize,
    });

    return this;
  }

  // ---------------------------------------------------------------------------

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "users" });
    this.hasMany(models.Integration, {
      foreignKey: "partner_id",
      as: "integrations",
    });
  }

  merge(data, only = []) {
    const fields = _.pick(data, only);
    if (_.isEmpty(fields)) {
      return false;
    }
    Object.assign(this, fields);
    return true;
  }

  // ---------------------------------------------------------------------------
}

export default Partner;
