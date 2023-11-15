/* eslint-disable no-underscore-dangle */
import jwt from 'jsonwebtoken';
import UserStorage from '@storage/users/users-storage';
import * as jwtConstants from '@constants/jwt';

export default class AuthService {
  private aUsersStorage = new UserStorage();

  async login(username: string, password: string) {
    const user = await this.aUsersStorage.getOne({
      username,
      password,
    });

    if (!user) {
      throw new Error('Nombre de usuario o contraseña incorrectos');
    }

    const token = jwt.sign({ id: user._id }, jwtConstants.jwtSecret, { expiresIn: '1h' });

    return token;
  }
}
