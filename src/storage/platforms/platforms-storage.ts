import { Platform } from '@interfaces/IPlatform';
import PlatformDao from '@root/db/models/platforms/platforms.dao';

export default class PlatformStorage {
  private aPlatformDao;

  constructor() {
    this.aPlatformDao = new PlatformDao();
  }

  async getAll(): Promise<Platform[]> {
   const platforms = await this.aPlatformDao.getAll();
    return platforms;
  }
}
