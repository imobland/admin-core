import Sequelize, { Model } from "sequelize";
import btoa from "btoa";
class Picture extends Model {
  //
  static init(sequelize, config = {}) {
    //
    this.prototype.connection = sequelize;

    const fields = {
      picture_id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      user_id: Sequelize.NUMBER,
      realestate_id: Sequelize.NUMBER,
      property_id: Sequelize.NUMBER,
      version: Sequelize.NUMBER,
      title: Sequelize.STRING,
      name: Sequelize.STRING,
      src: Sequelize.STRING,
      path: Sequelize.STRING,
      extension: Sequelize.STRING,
      size: Sequelize.NUMBER,
      date_created: Sequelize.STRING,
      display: Sequelize.NUMBER,
      position: Sequelize.NUMBER,
      thumb: Sequelize.STRING,
      colors: Sequelize.STRING,
      type: Sequelize.STRING,
      insert_date: Sequelize.STRING,
    };

    super.init(fields, {
      tableName: "picture",
      sequelize,
      ...config,
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

  static getFullPath(pic, { type, domain, bucket }) {
    //
    if (type == "aws") {
      return domain + "/" + btoa(JSON.stringify({ bucket, key: pic.path }));
    }

    // -------------------------------------------------------------------------

    if (pic.version == "1") {
      var re = /([a-zA-Z0-9]+).jpg/i;
      var m = pic.path.match(re);
      if (m) {
        return (
          "https://pictureimobland.blob.core.windows.net/gallery/" +
          pic.path.replace(m[0], m[1] + "/" + m[1] + "-1920.jpg")
        );
      }
    }

    return "https://pictureimobland.blob.core.windows.net/gallery/" + pic.path;
  }
}

export default Picture;
