const React = require('react')
const Def = require('../default')
const { DEFAULT_EXTENSIONS } = require('@babel/core')

function Index(data) {
  let placesFormatted = data.places.map((place) => {
      return (
          <div className='col-sm-4 text-center'>
              <a href={`/places/${place.id}`}>
                  <h2>{place.name} - {place.city}, {place.state}</h2>
              </a>
              <h3>{place.cuisines}</h3>
              <img className='img-max' src={place.pic} alt={place.name} />
          </div>
      )
  })

  return (
      <Def>
          <main>
              <h1>Index</h1>
              <div className='row'>
                  {placesFormatted}
              </div>
          </main>
    </Def>
  )
}

module.exports = Index
