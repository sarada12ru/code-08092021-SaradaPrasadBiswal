const express = require( 'express' );
const app = express();
const port = process.env.PORT || 3000;
const cors = require( 'cors' );
const errorHandler = require( './errorHandler' );

// Middlewares

app.use( express.json( {type: 'application/json' } ) );
app.use(cors());

//Router

const routes = require( './routes' );
app.use( '/api', routes );

app.use( errorHandler.invalidRoute );
app.use( errorHandler.universalErrorHandler );

app.listen( port, () => {

    console.log( `App running on port ${ port }` );

} )