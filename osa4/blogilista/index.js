require('dotenv').config();
const http = require('http');
const config = require('./utils/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const blogsRouter = require('./controllers/blogs');


const mongoUrl = config.MONGODB_URI;
mongoose.connect(mongoUrl, { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.json());
app.use('/api/blogs', blogsRouter);



app.listen(config.PORT, () => {
	console.log(`Server running on port ${config.PORT}`);
});
