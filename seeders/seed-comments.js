const db = require('../models')



function seed () {
    db.place_schema.findOne({ name : 'H-thai-ML'})
    .then((place) => {
        db.comment_schema.create ({
            author: 'famished Fran',
            rant: false,
            starts : 5.0,
            content : ' wow, simply amazing! Higly recommended!'
        })
        .then((comment) => {
            place.comments.push(comment)
            place.save()
            .then(() => {process.exit() })
    })
})
.catch((err) => {console.log(err)})
}
seed()