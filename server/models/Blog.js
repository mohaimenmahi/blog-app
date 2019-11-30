const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Blog = new Schema(
  {
    title: { type: String },
    author: { type: String },
    body: { type: String },
    time: { type: Date, default: Date.now },
    comments: {
      type: Array
    }
  },
  {
    collection: 'blogs'
  }
)

module.exports = mongoose.model('Blog', Blog)
