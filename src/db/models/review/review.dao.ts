/* eslint-disable no-underscore-dangle */
import mongooseInstance from '@db/connection';
import { Review } from '@interfaces/IReview';

export default class ReviewDao {
  private dataBaseConnection = mongooseInstance;

  async save(review: Review) {
    const reviewCreated = await this.dataBaseConnection.models.reviews.create({
      ...review,
      score: Number(review.score),
    });
    return reviewCreated;
  }
}
