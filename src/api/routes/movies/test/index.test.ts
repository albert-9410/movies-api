/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'chai';
import request from 'supertest';
import * as mocks from './mocks';
import app from '../../../../app';
import MovieDao from '../../../../db/models/movie/movie.dao';

describe('Movie Integrations Test', () => {
  const aMovieDao = new MovieDao();

  before('seed db', async () => {
    await aMovieDao.bulkCreate(mocks.moviesMocks);
  });

  after('seed db', async () => {
    await aMovieDao.clearAll();
  });

  describe('Get Movies Paginated', () => {
    const endpoint = '/api/movie';

    it('when request the movie, then return movies paginated', async () => {
      const { status, body } = await request(app)
        .get(endpoint);

      const bodyDataParsed = body?.data?.map((bodyData) => ({
        title: bodyData.title,
        director: bodyData.director,
        score: bodyData.score,
        _id: bodyData._id,
        platforms: bodyData.platforms,
      }));

      expect(body.pagination).to.be.eql({ limit: 10, page: 1 });
      expect(bodyDataParsed).to.be.eql(mocks.moviesMocks);
      expect(status).to.be.eql(200);
    });
  });

  describe('Create Movie Tests', () => {
    const endpoint = '/api/movie';

    it(`when send movie title, director, platforms and image, 
    then save the movie and return the movie data.`, async () => {
      const { status, body } = await request(app)
        .post(endpoint)
        .field('title', 'spiderman')
        .field('director', 'alberto')
        .field('platforms[]', '5fb3a45c3df54939b6a7b1f2')
        .field('platforms[]', '6fb3a45c3df54939b6a7b1f3')
        .attach('image', `${__dirname}/images/test.png`);

      expect(body.data?.platforms).to.be.eql(['5fb3a45c3df54939b6a7b1f2', '6fb3a45c3df54939b6a7b1f3']);
      expect(body.data?.reviews).to.be.eql([]);
      expect(body.data?._id).to.be.string;
      expect(body.data?.title).to.be.eql('spiderman');
      expect(body.data?.director).to.be.eql('alberto');
      expect(body.data?.image?.type).to.be.eql('Buffer');
      expect(body.data?.imageMimeType).to.be.eql('image/png');
      expect(status).to.be.equal(201);
    });
  });

  describe('Update Movie Tests', () => {
    const endpoint = '/api/movie';
    it('when send a request to update a movie, then return de movie updated', async () => {
      const movieToUpdate = mocks.moviesMocks[0];
      const newTitle = 'name updated';
      const { status, body } = await request(app)
        .patch(`${endpoint}/${movieToUpdate._id}`)
        .field('title', newTitle);

      const movieParsed = {
        title: body.data.title,
        director: body.data.director,
        score: body.data.score,
        _id: body.data._id,
        platforms: body.data.platforms,
      };

      expect(movieParsed).to.be.eql({
        ...movieToUpdate,
        title: newTitle,
      });
      expect(status).to.be.eql(200);
    });
  });

  describe('Delete Movie Test', () => {
    const endpoint = '/api/movie';
    it('when request to delete movie, then return the number of movies deleted', async () => {
      const movieToDelete = mocks.moviesMocks[1];
      const { status, body } = await request(app)
        .delete(`${endpoint}/${movieToDelete._id}`);

      expect(body.data).to.be.eql(1);
      expect(status).to.be.eql(200);
    });
  });
});
