import { RequestHandler } from 'express';

import MovieService from '@services/movies';

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
      console.log(movieId);
      const response = await this.aMovieService.deleteMovie(movieId);
      
      return res.status(200).json({ data: response });
    } catch (error) {
      return next(error);
    }
  };
}
