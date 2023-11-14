import { v4 as uuidv4 } from 'uuid';
import { Review } from '@root/common/interfaces/IReview';
import ReviewDao from '@root/db/models/review/review.dao';

export default class PlatformStorage {
  private aReviewDao;

  constructor() {
    this.aReviewDao = new ReviewDao();
  }

  async save(review: Review) {
    const reviewCreated = await this.aReviewDao.save({ ...review, _id: uuidv4() });
    return reviewCreated;
  }
}
