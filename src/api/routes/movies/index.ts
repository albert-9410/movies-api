import { Router } from 'express';
import MovieController from './controller';

const app: Router = Router();
const aMovieController = new MovieController();

app.post('/', aMovieController.createMovie);
app.delete('/:id', aMovieController.deleteMovie);
app.get('/', aMovieController.getAllPaginated);
app.patch('/:id', aMovieController.update);
app.post('/:id/duplicate', aMovieController.duplicate);
app.post('/:id/platform/:platform_id/review', aMovieController.createMovieReview);
app.get('/:id', aMovieController.getMovieWithReviewsGroupedByPlatform);

export default app;
