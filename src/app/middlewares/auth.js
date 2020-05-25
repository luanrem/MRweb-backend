import jwt from 'jsonwebtoken';
import { promisify } from 'util'; //This package change a callback func in async

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if user has the token
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  //This line split the string with before and after the space.
  //Thats because the "authHeader" comes: "Bearer <token>". Use console.lot(authHeader) to see
  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;
    console.log(decoded);
    
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};