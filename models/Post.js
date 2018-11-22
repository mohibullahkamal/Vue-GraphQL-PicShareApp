const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {},
  imageUrl: {},
  categories: {},
  description: {},
  createdDate: {},
  likes: {},
  createdBy: {},
  messages: [{}]
});
