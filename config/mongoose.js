// setting up the mongodb connection through mongoose

const mongoose = require('mongoose');
const url = 'mongodb://0.0.0.0:27017/db';

// mongoose.connect('url') 
mongoose.connect(url);
const db=mongoose.connection;

//  catch an error when connecting mongodb
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});


// exports this module
module.exports=db;  