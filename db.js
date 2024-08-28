const mongoose = require('mongoose')

//define mongodb connection URl 

const mongoURL = 'mongodb://127.0.0.1:27017/hotels'
mongoose.connect(mongoURL,{
    useNewUrlparser : true,
    useUnifiedTopology : true 
})
//mongoose maintains a default connection object representing mongdb connection
const db = mongoose.connection

//event listeners
db.on('error',(err)=>{
    console.log('connection error')
})
db.on('connected',()=>{
    console.log('connected to database')
})
db.on('disconnected',()=>{
    console.log('disconnected to database')
})

module.exports = db;
