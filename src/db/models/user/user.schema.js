const mongoose = require('mongoose');

module.exports = (connection) => {
  const UserSchema = new mongoose.Schema(
    {
      _id: {
        type: String,
        required: true,
        unique: true,
      },
      username: {
        type: String,
        required: true,
      },
      password: {
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
    },
  );

  const userModel = connection.model('users', UserSchema);
  return userModel;
};
