import Sequelize, { Model } from 'sequelize';

class Avatar extends Model {
  static init(sequelize) {
    super.init(
    {
      name: Sequelize.STRING,
      file_name: Sequelize.STRING,
      path: Sequelize.STRING,
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `http://localhost:3333/files/${this.file_name}`;
        }
      }
    },
    {
      sequelize,
    }
    );
    return this;
  }
}

export default Avatar;