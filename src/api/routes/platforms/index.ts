import { Router } from 'express';
import PlatformsController from './controller';

const app: Router = Router();
const aPlatformsController = new PlatformsController();

app.get('/', aPlatformsController.getAllPlatforms);

export default app;
