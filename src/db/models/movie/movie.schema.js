const mongoose = require('mongoose');

module.exports = (connection) => {
  const MovieSchema = new mongoose.Schema(
    {
      _id: {
        type: String,
        required: true,
        unique: true,
      },
      title: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: false,
      },
      image: {
        type: Buffer,
        required: false,
      },
      director: {
        type: String,
        required: true,
      },
      platforms: [
        {
          type: String,
          ref: 'platforms',
        },
      ],
      score: {
        type: Number,
        required: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
      reviews: [
        {
          type: String,
          ref: 'reviews',
        },
      ],
    },
    {
      strict: false,
      minimize: false,
      timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    },
  );

  const MovieModel = connection.model('movies', MovieSchema);
  return MovieModel;
};
