const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {},
  email: {},
  password: {},
  avatar: {},
  joinDate: {}
});
