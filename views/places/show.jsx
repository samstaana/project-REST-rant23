const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No Comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map (c => {
            return (
                <div className='border'>
                    <h2 className='rant'> {c.rant ? 'Rant! 😡' : 'Rave! 😍'}
                    </h2>
                    <h4>(c.content)</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <form method="POST" action {`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                        <input type='submit' className='btn btn-danger' value='Delete Comment' />
                    </form>
                </div>
            )
        })
    }
    return (
        <Def>
          <main>
            <div className="row">
                <div className="col-sm-6">
                    <img src={data.place.pic} alt={data.place.name} />
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                </div>
                <div className="col-sm-6">
                    <h1>{ data.place.name }</h1>
                    <h2>
                        Rating
                    </h2>
                    <h3 className="inactive">
                        Not Rated
                    </h3>
                    <br />
                    <h2>
                        Description
                    </h2>
                    <h3>
                        { data.place.showEstablished() }
                    </h3>
                    <h3>
                        Serving {data.place.cuisines}
                    </h3>
                    <br />
                    <a href={`/places/${data.i}/edit`}>
                        <button className="btn btn-warning">Edit</button>
                    </a>
                    <form action={`/places/${data.i}?_method=DELETE`} method="POST">
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                    </form>
                </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show;