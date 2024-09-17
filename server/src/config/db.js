const mongoose = require('mongoose')
const Config = require('.')

const url = Config.DB_URL

const connectDB = async () => {
    try{
        await mongoose.connect(url)
        console.log("Database Connected Succesfully🚀")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB