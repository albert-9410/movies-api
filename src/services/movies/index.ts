import { GetMoviesPaginatedDTO, MovieFormData, UpdateMovieDTO } from '@root/common/interfaces/IMovie';
import MovieStorage from '@storage/movies/movies-storage';

export default class MovieService {
  private MovieStorage = new MovieStorage();

  async createMovie(movieFormData: MovieFormData) {
    const result = await this.MovieStorage.save(movieFormData);
    return result;
  }

  async deleteMovie(movieId: string) {
    const result = await this.MovieStorage.delete(movieId);
    return result;
  }

  async getAllPaginated(conditions: GetMoviesPaginatedDTO) {
    const result = await this.MovieStorage.getAllPaginated(conditions);
    return result;
  }

  async updateMovie(movieId:string, movieUpdateData: UpdateMovieDTO) {
    await this.MovieStorage.update(movieId, movieUpdateData);
    const movieUpdated = this.MovieStorage.getById(movieId);
    return movieUpdated;
  }

  async duplicateMovie(movieId: string) {
    const movieToDuplicate = await this.MovieStorage.getById(movieId);
    const result = await this.MovieStorage.save({
      title: movieToDuplicate.title,
      director: movieToDuplicate.director,
      image: movieToDuplicate.image,
      imageMimeType: movieToDuplicate.imageMimeType,
      platforms: movieToDuplicate.platforms,
      reviews: movieToDuplicate.reviews,
    });
    return result;
  }
}
