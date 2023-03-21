const router =require ('express').Router()

router.get('/', (req,res) =>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'public/css/images/toa-heftiba-6bKpHAun4d8-unsplash.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'public/css/images/clay-banks-_wkd7XBRfU4-unsplash.jpg'
      }]
      
    res.render('places/index', {places})
})
module.exports = router