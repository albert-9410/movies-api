import { Router } from 'express';
import authenticateToken from '@middlewares/auth-middleware';

import AuthRouter from './routes/auth';
import MovieRouter from './routes/movies';
import platformRouter from './routes/platforms';

const app: Router = Router();

app.use('/auth', AuthRouter);

app.use(authenticateToken);
app.use('/movie', MovieRouter);
app.use('/platform', platformRouter);

export default app;
