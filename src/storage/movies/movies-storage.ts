import { GetMoviesPaginatedDTO, Movie, MovieParamsToSave, UpdateMovieDTO } from '@interfaces/IMovie';
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

  async update(movieId: string, movieUpdateData: UpdateMovieDTO) { 
    const movieUpdated = await this.aMovieDao.updateMovieById(movieId, movieUpdateData);
     return movieUpdated;
   }
}
