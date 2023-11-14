const { v4: uuidv4 } = require('uuid');
const mongoose = require('mongoose');

module.exports = (connection) => {
  const PlatformSchema = new mongoose.Schema(
    {
      id: {
        type: String,
        default: uuidv4,
        required: true,
        unique: true,
      },
      icon: {
        type: String,
        required: true,
      },
			title: {
        type: String,
        required: true,
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
    }
  );

  const platformsModel = connection.model('platforms', PlatformSchema);
  return platformsModel;
};
