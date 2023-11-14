import { v4 as uuidv4 } from 'uuid';
import {
  GetMoviesPaginatedDTO, Movie, MovieParamsToSave, UpdateMovieDTO,
} from '@interfaces/IMovie';
import MoviesDao from '@root/db/models/movie/movie.dao';

export default class MovieStorage {
  private aMovieDao;

  constructor() {
    this.aMovieDao = new MoviesDao();
  }

  async save(movieData: MovieParamsToSave): Promise<Movie> {
    const movieCreated = await this.aMovieDao.create({
      ...movieData,
      _id: uuidv4(),
    });
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

  async getById(movieId: string): Promise<Movie> {
    const movie = await this.aMovieDao.getById(movieId);
    return movie;
  }

  async addMovieReview(movieId: string, reviewId: string) {
    const movieUpdated = await this.aMovieDao.addMovieReview(movieId, reviewId);
    return movieUpdated;
  }
}
