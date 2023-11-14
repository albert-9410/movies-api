import mongooseInstance from '@db/connection';

export default class PlatformDao {
  private dataBaseConnection = mongooseInstance;

  async getAll() {
    const platforms = await this.dataBaseConnection.models.platforms.find();
    return platforms;
  }
}
