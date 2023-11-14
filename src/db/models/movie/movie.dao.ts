import { GetMoviesPaginatedDTO, Movie, MovieParamsToSave, UpdateMovieDTO } from "@interfaces/IMovie";
import mongooseInstance from "@db/connection";
import mongoose from "mongoose";

export default class MoviesDao {
  private dataBaseConnection = mongooseInstance;

  async create(movieData: MovieParamsToSave) {

    const movieCreated = await this.dataBaseConnection.models.movies.create({
      ...movieData,
      platforms: movieData.platforms?.length
        ? movieData.platforms.map((platform) => new mongoose.Types.ObjectId(platform))
        : undefined,
    });
    return movieCreated;
  }

  async delete(movieId: string) {
    const movieRemoved = await this.dataBaseConnection.models.movies.deleteOne({
      id: movieId
    });

    return movieRemoved?.deletedCount;
  }

  async getAllPaginated({
    page,
    limit
  }: GetMoviesPaginatedDTO) {

    const movies = await this.dataBaseConnection.models.movies.find()
    .skip((Number(page) - 1) * Number(limit))
    .limit(Number(limit));

    return movies;
  }


  async updateMovieById(movieId: string, movieUpdateData: UpdateMovieDTO) {
    const movieUpdated = await this.dataBaseConnection.models.movies.updateOne({
      id: movieId,
    }, movieUpdateData)

    return movieUpdated;
  }

  async getById(movieId: string): Promise<Movie> {
    const movie = await this.dataBaseConnection.models.movies.findOne({
      id: movieId
    });
    return movie;
  }
}
