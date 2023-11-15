/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import * as jwtConstants from '@constants/jwt';
import { Request, Response, NextFunction } from 'express';

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, jwtConstants.jwtSecret, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    if (!user) {
      return res.sendStatus(403);
    }

    return next();
  });
};

export default authenticateToken;
