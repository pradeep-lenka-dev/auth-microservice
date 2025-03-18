const mongoose = require ('mongoose')

const conectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('DB CONNECTED!')
    } catch (error) {
        console.log(error)
    }
}

module.exports = conectDB;