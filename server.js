const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const passport = require('./auth')
const personRoutes = require('./routes/personroute');
const menuRoute = require('./routes/menuroutes');

//Middleware function

const logRequest = (req,res,next) =>{
  console.log(`${new Date().toLocaleString()} Request made to : ${req.originalUrl}` );
  next(); //move on to next phase
}

app.use(passport.initialize());
const authenticatemiddleware = passport.authenticate('local',{session:false}) 

app.use(logRequest);//if we want middleware to all routes 
app.use('/person',authenticatemiddleware,personRoutes)
app.use('/menu',menuRoute)

app.get('/',function (req, res) {
  res.send('Hello, How Can I help You?')
})
app.get('/pasta',logRequest,function(req,res){
  res.send('Do you want white sauce or Red sauce pasta?')
})//middleware in single route


app.get('/pizza',function(req,res){
  var topings ={
    name: 'olives',
    quantity : '10 pieces'
  }
  res.send(topings)
})


app.listen(3000, ()=>{
  console.log('listening on 3000')})

