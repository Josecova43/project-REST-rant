// require('dotenv').config()
const express = require('../express')
const app = express()


//express settings
app.set('view', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))


// controller and routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
  res.render('error404')
})


//get /places
app.get('/', (req,res)=> {

  res.render('places/index', {places})
})

app.listen(3000)
