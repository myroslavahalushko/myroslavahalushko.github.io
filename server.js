const port = 4000;
const dist = __dirname + '/dist';

// Express
const express = require( 'express' );

let app = express();
let path = require( 'path' );
let http = require( 'http' ).createServer( app );

app.use( express.static( dist ) );
// SPA routing
app.get( '/', ( req, res ) => res.sendFile( __dirname, '/dist/index.html' ) );

// Start server

app.get( '*', ( req, res ) => {
	res.sendFile( path.join( __dirname, '/dist/index.html' ) )
} );

http.listen( port, () => {
	console.log( 'started on port ' + port );
} );