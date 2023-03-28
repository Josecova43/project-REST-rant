const router =require ('express').Router()
const places = require('../models/places.js')


router.post('/', (req, res) => {

  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})



router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})


// edit router
router.get('/:id/edit', (req, res) => {
  db.place_schema.findById(req.params.id)
      .then((place) => { res.render('places/edit', { place }) })
      .catch((err) => {
          console.log(err)
          res.render('error404')
      })    
})



router.post('/new', (req, res) => {
   res.send('places/new')
})


module.exports = router