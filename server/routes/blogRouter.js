const express = require('express')
const app = express()
const Blog = require('../models/Blog')
const mongoose = require('mongoose')

app.get('/', (req, res) => {
  Blog.find({}, (err, blog) => {
    if (err) {
      console.log(err)
    } else {
      res.json(blog)
    }
  })
})

app.post('/add/post', (req, res, next) => {
  let blog = new Blog(req.body)
  blog
    .save()
    .then(blog => {
      res.json('Blog Added')
    })
    .catch(err => {
      return next()
    })
})

app.post('/comment/:id', (req, res) => {
  let id = req.params.id
  console.log('id: ', id)
  let addComment = {
    comment: req.body.comment,
    time: Date.now()
  }
  Blog.findOne({ _id: id }).then(doc => {
    if (doc) {
      doc.comments.push(addComment)
      doc
        .save()
        .then(newB => {
          console.log('newB', newB)
          res.json(newB)
        })
        .catch(err => {
          console.log('err', err)
          res.json(err)
        })
    }
  })
})

app.post('/deleteComment', (req, res) => {
  let time = req.body.time
  let postId = req.body.id
  //   console.log('postId', postId)
  Blog.findOne({ _id: postId }).then(doc => {
    if (doc) {
      //   console.log('post', doc)
      doc.comments = doc.comments.filter(item => item.time !== time)
      doc
        .save()
        .then(newB => {
          console.log('NewB', newB)
          req.json(newB)
        })
        .catch(err => {
          console.log('err', err)
          res.json(err)
        })
    }
  })
})

app.post('/deletePost', (req, res) => {
  let postId = req.body.id
  Blog.delete({ _id: id })
    .then(() => {
      res.json('deleted')
    })
    .catch(err => {
      res.json(err)
    })
})

module.exports = app
