const React = require('react')
const Def = require('./default')


function home () {
    return (
        <Def>
            <main>
                <h1>Rest Rant</h1>
                <div>
                    <img src='public/css/images/mohamed-nohassi-odxB5oIG_iA-unsplash.jpg' alt=' Image'></img>
                    <div>
                        photo by <a href='AUTHOR_LINK'>Mohammed Nohassi</a>on<a href='UNPLASH_LINK'>Unsplash</a>
                    </div>
                </div>
            </main>
            <a href="/places">
                <button className='btn-primary'>Places Page</button>
            </a>
        </Def>
    )
}


module.exports = home 