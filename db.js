const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/cloudnotes?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongoose = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connect to mongoose successfully"); 
    })
}

module.exports = connectToMongoose;