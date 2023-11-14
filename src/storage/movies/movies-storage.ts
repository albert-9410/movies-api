import { GetMoviesPaginatedDTO, Movie, MovieParamsToSave } from '@interfaces/IMovie';
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

  async delete(movieId: string) { 
   const movieRemovedCount = await this.aMovieDao.delete(movieId);
    return movieRemovedCount;
  }

  async getAllPaginated(conditions: GetMoviesPaginatedDTO) { 
   const movieRemovedCount = await this.aMovieDao.getAllPaginated(conditions);
    return movieRemovedCount;
  }
}
