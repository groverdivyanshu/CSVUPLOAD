const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://groverdivyanshu97:groverdivyanshu97@cluster0.0gajsdn.mongodb.net/');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
