import { GetMoviesPaginatedDTO, MovieFormData, UpdateMovieDTO } from '@interfaces/IMovie';
import { Review } from '@interfaces/IReview';
import MovieStorage from '@storage/movies/movies-storage';
import ReviewStorage from '@storage/reviews/review-storage';

export default class MovieService {
  private MovieStorage = new MovieStorage();

  private ReviewStorage = new ReviewStorage();

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

  async updateMovie(movieId: string, movieUpdateData: UpdateMovieDTO) {
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

  async createMovieReview(review: Review) {
    const reviewCrated = await this.ReviewStorage.save(review);
    await this.MovieStorage.addMovieReview(review.movieId, reviewCrated.id);
    return reviewCrated;
  }

  async getMovieWithReviewsGroupedByPlatform(movieId: string) {
    const [movieData, reviewsGroupedByPlatforms] = await Promise.all([
      this.MovieStorage.getById(movieId),
      this.ReviewStorage.getMovieReviewsGroupedByPlatform(movieId),
    ]);

    return {
      ...movieData,
      reviewsGroupedByPlatforms,
    };
  }
}
