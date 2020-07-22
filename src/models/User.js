import Sequelize, { Model } from "sequelize";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import authConfig from "../config/auth";

class User extends Model {
  //
  static init(sequelize) {
    //
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        access_token: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    // Hooks
    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  // ---------------------------------------------------------------------------

  static associate(models) {
    this.hasMany(models.Client, { foreignKey: "user_id", as: "clients" });
    this.hasMany(models.Partner, { foreignKey: "user_id", as: "partners" });
  }

  // ---------------------------------------------------------------------------

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  // ---------------------------------------------------------------------------

  generateToken() {
    return jwt.sign(
      {
        id: this.id,
      },
      authConfig.secret,
      {
        // expiresIn: authConfig.expiresIn,
      }
    );
  }

  // ---------------------------------------------------------------------------
}

export default User;
