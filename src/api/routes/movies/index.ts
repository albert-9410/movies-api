import { Router } from 'express';
import MovieController from './controller';

const app: Router = Router();
const aMovieController = new MovieController();

app.post('/', aMovieController.createMovie);
app.delete('/:id', aMovieController.deleteMovie);
app.get('/', aMovieController.getAllPaginated);

export default app;
