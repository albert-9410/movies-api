import { GetMoviesPaginatedDTO, MovieFormData, UpdateMovieDTO } from '@root/common/interfaces/IMovie';
import MovieStorage from '@storage/movies/movies-storage';

export default class MovieService {
  private MovieStorage = new MovieStorage();

  async createMovie(movieFormData: MovieFormData) {
    const  result = await this.MovieStorage.save(movieFormData);
    return result;
  }

  async deleteMovie(movieId: string) {
    const  result = await this.MovieStorage.delete(movieId);
    return result;
  }

  async getAllPaginated(conditions: GetMoviesPaginatedDTO) {
    const  result = await this.MovieStorage.getAllPaginated(conditions);
    return result;
  }

  async updateMovie(movieId:string, movieUpdateData: UpdateMovieDTO) {
    const movieUpdated = await this.MovieStorage.update(movieId, movieUpdateData);
    return movieUpdated;
  }
}
