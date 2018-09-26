const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

let port = process.env.PORT  || 4200;

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/blogs', { useNewUrlParser: true })
    .then(() => {
        console.log('Database Started');
    })
    .catch((err) => {
        console.log('App starting error', err.stack);
    });

const blogRouter = require('./routes/blogRouter');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/blogs', blogRouter);

app.listen(port, () => console.log(`Server is up to port ${port}`));

