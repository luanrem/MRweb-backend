import jwt from 'jsonwebtoken';

import User from '../models/User';
import Avatar from '../models/Avatar';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    // Verify if the user exist with email
    const user = await User.findOne({ where: { email } });
    //if not exist
    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }

    // Verify if the password match
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      // Here we will pass the token to user 
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expires,
      }),
    })
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

export default new SessionController();