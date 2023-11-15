import { Router } from 'express';
import AuthController from './controller';

const app: Router = Router();
const aMovieController = new AuthController();

app.post('/login', aMovieController.login);

export default app;
