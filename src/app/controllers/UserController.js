import User from '../models/User';
import Avatar from '../models/Avatar';

class UserController {
  async store(req, res) {

    // Verifica se já existe um usuário com esse email
    const userExists = await User.findOne({ where: { email: req.body.email }});

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, email, name, nickname } = await User.create(req.body);

    return res.json({
      id,
      name,
      nickname,
      email,
    });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    // Search the user with (find by Primary Key). User that has userID primary key
    const user = await User.findByPk(req.userId);

    // If the user will change the actual email:
    if(email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    // Check if the old password match with the new one just if the user want to do that
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({ 
      id,
      name,
      email,
      provider,
     });
  }

  async index(req, res) {
    const user = await User.findByPk(req.userId,
      {
        include: [Avatar
  
        ]
      }
    );

    return res.json({ user });
  }
}

export default new UserController();