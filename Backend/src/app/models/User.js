import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
    {
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      name: Sequelize.STRING,
      nickname: Sequelize.STRING,
      email: Sequelize.STRING,
      birth: Sequelize.DATE,
      gender: Sequelize.STRING,
      matrial_status: Sequelize.INTEGER,
      cell_phone: Sequelize.STRING,
      phone: Sequelize.STRING,
      ex_participant: Sequelize.BOOLEAN,
    },
    {
      sequelize,
    }
    );
    // Hooks are code pieces that will execute before or after some action
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }
}

export default User;