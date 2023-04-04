const mongoose = require('mongoose')


const place_schema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: 'http://placekitten.com/350/350'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'surely not that old!'],
    max: [new Date().getFullYear(), 'hey, this year is in the future!']
  },
  comments: [ { type: mongoose.Schema.Types.ObjectId, redf : 'comment'}]
})
place_schema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city},${this.state} since ${this.founded}`
}
module.exports = mongoose.model('place_schema', place_schema)
