import mongoose from 'mongoose'



const DBConnection = async () => {
    const DB_URL = "mongodb://127.0.0.1:27017"
    try {
        await mongoose.connect(DB_URL,{useNewUrlParser : true});
        console.log("DB connected")
    } catch (error) {
        console.error();("Error while connecting Database", error.message)
    }
}

export default DBConnection;