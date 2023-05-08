const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-shopping'); //added to mongodb Atlas

module.exports = mongoose.connection;
