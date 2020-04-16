import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
    {
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
  }
}

export default User;