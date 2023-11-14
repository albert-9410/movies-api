import { RequestHandler } from 'express';

import PlatformService from '@services/platforms';

export default class PlatformsController {
  private aPlatformService = new PlatformService();

  getAllPlatforms: RequestHandler = async (req, res, next) => {
    try {
      const platforms = await this.aPlatformService.getAllPlatforms();
      return res.status(200).json({ data: platforms });
    } catch (error) {
      return next(error);
    }
  };
}
