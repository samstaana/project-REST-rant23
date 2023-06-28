const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="/css/style.css" />
                {/* Note: You don't need to put the word 'public' in your path even though the folder is called that. Since we told Express what our static folder is called, it already knows to look there! */}
            </head>
            <body>
                <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/places">Places</a>
                            </li>
                            <li>
                                <a href="/places/new">Add Place</a>
                            </li>
                        </ul>
                    </nav>
                {html.children}
            </body>
        </html>
    )
  }  

module.exports = Def