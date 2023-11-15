import mongooseInstance from '@db/connection';
import { UserConditions } from '@interfaces/IUser';

export default class UserDao {
  private dataBaseConnection = mongooseInstance;

  async getOne(conditions: UserConditions) {
    const user = await this.dataBaseConnection.models.users.findOne(conditions);
    return user;
  }
}
