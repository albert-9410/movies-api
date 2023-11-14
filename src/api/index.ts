import { Router } from 'express';
import MovieRouter from './routes/movies';
import platformRouter from './routes/platforms';

const app: Router = Router();

app.use('/movie', MovieRouter);
app.use('/platform', platformRouter);

export default app;
