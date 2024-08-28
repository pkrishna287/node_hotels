const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const menuRoutes = require('./routes/menuroutes');
app.use('/menu',menuRoutes)
const personRoutes = require('./routes/personroute');
app.use('/person',personRoutes)

app.get('/', function (req, res) {
  res.send('Hello, How Can I help You?')
})
app.get('/pasta',function(req,res){
  res.send('Do you want white sauce or Red sauce pasta?')
})

app.get('/pizza',function(req,res){
  var topings ={
    name: 'olives',
    quantity : '10 pieces'
  }
  res.send(topings)
})


app.listen(3000, ()=>{
  console.log('listening on 3000')})

