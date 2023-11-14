const mongoose = require('mongoose');

module.exports = (connection) => {
  const ReviewSchema = new mongoose.Schema(
    {
      _id: {
        type: String,
        required: true,
        unique: true,
      },
      movieId: {
        type: String,
        ref: 'movies',
        required: true,
      },
      platformId: {
        type: String,
        ref: 'platforms',
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      score: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      strict: false,
      minimize: false,
      timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    },
  );

  const ReviewModel = connection.model('reviews', ReviewSchema);
  return ReviewModel;
};
