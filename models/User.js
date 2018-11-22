const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
      type: String,
      required: true,
      unique: true,
      trim: true
  },
  email: {
      type: string,
      required: true, 
      trim: true
  }
  password: {
      type: String,
      required: true,
      trim: true
  },
  avatar: {},
  joinDate: {}, 
  favorites: {}
});
