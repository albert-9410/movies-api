import { Router } from 'express';
import MovieController from './controller';

const app: Router = Router();
const aMovieController = new MovieController();

app.post('/', aMovieController.createMovie);

export default app;
