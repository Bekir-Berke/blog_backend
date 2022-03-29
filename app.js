const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { connection, options } = require('./conf.json');
const blogRouter = require('./routes/blogRouter');
const userRouter = require('./routes/userRouter');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/blog', blogRouter);
app.use('/user', userRouter);
mongoose.connect(connection, options)
    .then(() => {
        app.listen(process.env.PORT || port);
        console.log(`http://localhost:${port}`);
    });