import { RequestHandler } from 'express';

import AuthService from '@services/auth';

export default class AuthController {
  private aAuthService = new AuthService();

  login: RequestHandler = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const token = await this.aAuthService.login(username, password);
      return res.status(200).json({ data: token });
    } catch (error) {
      return next(error);
    }
  };
}
