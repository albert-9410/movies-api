import { RequestHandler } from 'express';

import MovieService from '@services/movies';
import { GetMoviesPaginatedDTO } from '@root/common/interfaces/IMovie';

export default class MovieController {
  private aMovieService = new MovieService();

  createMovie: RequestHandler = async (req, res, next) => {
    try {
      const movieFormData = req.body;
      movieFormData.image = req.file?.buffer;
      movieFormData.imageMimeType = req.file?.mimetype;
      const movieCreated = await this.aMovieService.createMovie(movieFormData);

      return res.status(201).json({ data: movieCreated });
    } catch (error) {
      return next(error);
    }
  };

  deleteMovie: RequestHandler = async (req, res, next) => {
    try {
      const movieId = req.params.id;
      const response = await this.aMovieService.deleteMovie(movieId);

      return res.status(200).json({ data: response });
    } catch (error) {
      return next(error);
    }
  };

  getAllPaginated: RequestHandler = async (req, res, next) => {
    try {
      const conditions = req.query as unknown as GetMoviesPaginatedDTO;
      const response = await this.aMovieService.getAllPaginated(conditions);

      return res.status(200).json(response);
    } catch (error) {
      return next(error);
    }
  };

  update: RequestHandler = async (req, res, next) => {
    try {
      const movieId = req.params.id;
      const movieParamsToUpdate = req.body;

      if (req.file) {
        movieParamsToUpdate.image = req.file?.buffer;
        movieParamsToUpdate.imageMimeType = req.file?.mimetype;
      }

      const response = await this.aMovieService.updateMovie(movieId, movieParamsToUpdate);

      return res.status(200).json({ data: response });
    } catch (error) {
      return next(error);
    }
  };

  duplicate: RequestHandler = async (req, res, next) => {
    try {
      const movieId = req.params.id;
      const response = await this.aMovieService.duplicateMovie(movieId);

      return res.status(200).json({ data: response });
    } catch (error) {
      return next(error);
    }
  };

  createMovieReview: RequestHandler = async (req, res, next) => {
    try {
      const reviewData = req.body;
      reviewData.movieId = req.params.id;
      reviewData.platformId = req.params.platform_id;
      const response = await this.aMovieService.createMovieReview(reviewData);

      return res.status(200).json({ data: response });
    } catch (error) {
      return next(error);
    }
  };

  getMovieWithReviewsGroupedByPlatform: RequestHandler = async (req, res, next) => {
    try {
      const movieId = req.params.id;
      const response = await this.aMovieService.getMovieWithReviewsGroupedByPlatform(movieId);

      return res.status(200).json({ data: response });
    } catch (error) {
      return next(error);
    }
  };
}
