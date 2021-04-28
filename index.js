'use strict'

const server = require('./src/server.js')
const mongoose = require('mongoose');

require('dotenv').config();

const options = {

useNewUrlParser: true,
useUnifiedTopology: true
};
let mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, options);

require('./src/server.js').start(process.env.PORT);