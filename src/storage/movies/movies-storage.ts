import { Movie, MovieParamsToSave } from '@interfaces/IMovie';
import MoviesDao from '@root/db/models/movie/movie.dao';

export default class MovieStorage {
  private aMovieDao;

  constructor() {
    this.aMovieDao = new MoviesDao();
  }

  async save(movieData: MovieParamsToSave): Promise<Movie> {
   const movieCreated = await this.aMovieDao.create(movieData);
    return movieCreated;
  }
}
