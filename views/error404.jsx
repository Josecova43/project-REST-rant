const React = require('react')
const Def = require('./default')

function error404 () {
    <Def>
        <main>
            <h1>404:  PAGE NOT FOUND</h1>
            <p>opps, sorry, we can't find this page!</p>
            <div>
                <img src='public/css/images/arash-payam-ww9DO6PsTBE-unsplash.jpg' alt='sadPage'></img>
                photo by<a href='AUTHOR_LINK'> Arash Payam</a>on<a href='PAGE_LINK'>Unplash</a>
            </div>
        </main>
    </Def>
}

module.exports = error404
