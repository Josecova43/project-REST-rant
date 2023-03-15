const React = require('react')
const Def = require('./default')

function error404 () {
    <Def>
        <main>
            <h1>404:  PAGE NOT FOUND</h1>
            <p>opps, sorry, we can't find this page!</p>
        </main>
    </Def>
}

module.exports = error404
