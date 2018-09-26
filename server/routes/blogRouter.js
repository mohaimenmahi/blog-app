const express = require('express');
const app = express();
const Blog = require('../models/Blog');
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    Blog.find({}, (err, blog) => {
        if(err) {
            console.log(err);
        } else {
            res.json(blog);
        }
    });
});

app.post('/add/post', (req, res, next) => {
    let blog = new Blog(req.body);
    blog.save()
        .then(blog => {
            res.json('Blog Added');
        })
        .catch(err => {
            return next();
        })
});

app.post('/comment/:id', (req, res, next) => {
    let id = mongoose.Types.ObjectId(req.params.id);
    Blog.findByIdAndUpdate(id, {$push: { "comments": req.body }}, {safe: true, upsert: true}, (err, model) => {
            if(err) {
                console.log(err);
                return res.status(400).send(err);
            }
            return res.send(model);
        }).then(() => {
            res.json('Comment added');
        }).catch(() => {
           return next();
        });
});

app.post('/delete/:commentId', (req, res) => {
    let commentId = mongoose.Types.ObjectId(req.params.id);
    Blog.findByIdAndUpdate(
        commentId,
        {$pull: { _id: commentId }},
        function(err, model ) {
            if(err) {
                return res.status(400).send(err);
            }
            return res.send(model);
        }
    )
});

module.exports = app;