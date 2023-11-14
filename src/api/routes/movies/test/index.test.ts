/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import request from 'supertest';
import { expect } from 'chai';
import app from '../../../../app';

describe('Movie Integrations Test', () => {
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
      expect(body.data?.id).to.be.string;
      expect(body.data?.title).to.be.eql('spiderman');
      expect(body.data?.director).to.be.eql('alberto');
      expect(body.data?.image?.type).to.be.eql('Buffer');
      expect(body.data?.imageMimeType).to.be.eql('image/png');
      expect(status).to.be.equal(201);
    });
  });
});
