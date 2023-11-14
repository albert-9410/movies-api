import { MovieParamsToSave } from "@interfaces/IMovie";
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
}
