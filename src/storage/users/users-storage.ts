import UserDao from '@db/models/user/user.dao';
import { User, UserConditions } from '@interfaces/IUser';

export default class PlatformStorage {
  private aUserDao;

  constructor() {
    this.aUserDao = new UserDao();
  }

  async getOne(conditions: UserConditions): Promise<User> {
    const user = await this.aUserDao.getOne(conditions);
    return user;
  }
}
