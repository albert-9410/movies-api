/* eslint-disable no-underscore-dangle */
import {
  GetMoviesPaginatedDTO, Movie, MovieParamsToSave, UpdateMovieDTO,
} from '@interfaces/IMovie';
import mongooseInstance from '@db/connection';

export default class MoviesDao {
  private dataBaseConnection = mongooseInstance;

  async create(movieData: MovieParamsToSave) {
    const movieCreated = await this.dataBaseConnection.models.movies.create(movieData);
    return movieCreated;
  }

  async delete(movieId: string) {
    const movieRemoved = await this.dataBaseConnection.models.movies.deleteOne({
      _id: movieId,
    });

    return movieRemoved?.deletedCount;
  }

  async getAllPaginated({
    page,
    limit,
  }: GetMoviesPaginatedDTO) {
    const movies = await this.dataBaseConnection.models.movies.find()
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    return movies;
  }

  async updateMovieById(movieId: string, movieUpdateData: UpdateMovieDTO) {
    const movieUpdated = await this.dataBaseConnection.models.movies.updateOne({
      _id: movieId,
    }, movieUpdateData);

    return movieUpdated;
  }

  async getById(movieId: string): Promise<Movie> {
    const movie = await this.dataBaseConnection.models.movies.findOne({
      _id: movieId,
    });
    return movie?.toObject();
  }

  async addMovieReview(movieId: string, reviewId: string) {
    const movieUpdated = await this.dataBaseConnection.models.movies.findOneAndUpdate(
      {
        _id: movieId,
      },
      { $push: { reviews: reviewId } },
      { new: true },
    );
    return movieUpdated;
  }

  async bulkCreate(movies: Movie[]) {
    const result = await this.dataBaseConnection.models.movies.insertMany(movies);
    return result;
  }

  async clearAll() {
    const result = await this.dataBaseConnection.models.movies.deleteMany();
    return result;
  }
}
