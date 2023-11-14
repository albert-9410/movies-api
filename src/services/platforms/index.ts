import PlatformStorage from '@storage/platforms/platforms-storage';

export default class PlatformService {
  private aPlatformStorage = new PlatformStorage();

  async getAllPlatforms() {
    const  platforms = await this.aPlatformStorage.getAll();
    return platforms;
  }
}
