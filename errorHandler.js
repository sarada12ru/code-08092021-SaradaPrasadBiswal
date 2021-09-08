const invalidRoute = ( req, res ) => {

    res.status( 500 ).json( { success: false, message: "Invalid API Access Request" } )

}; 

const universalErrorHandler = ( err, req, res, next ) => {
    if ( res.headersSent ) {
        return next( err );
    }

    res.status( 500 ).json( { success: false, message: err.message } )

};

module.exports = {
    invalidRoute,
    universalErrorHandler
}