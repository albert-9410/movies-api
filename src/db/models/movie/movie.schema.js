const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

module.exports = (connection) => {
  const MovieSchema = new mongoose.Schema(
    {
      id: {
        type: String,
        default: uuidv4,
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
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Platform',
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
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Review',
        },
      ],
    },
    {
      strict: false,
      minimize: false,
      timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
    }
  );

  const MovieModel = connection.model('movies', MovieSchema);
  return MovieModel;
};
