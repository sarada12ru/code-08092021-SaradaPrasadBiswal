const async = require( 'async' );
const { calculateBMI } = require( './helper' )

exports.bmiCalculator = ( req, res ) => {
   
    let data = req.body.data;
    let result = [];

    let newPerson;

    async.eachSeries( data, ( person, after_person ) => {

        if( person.WeightKg && person.HeightCm )
        {

            newPerson = calculateBMI( person )

            result.push( newPerson );
    
            after_person();

        }
        else {

            result.push( person );
    
            after_person();
            
        }

    }, ( err ) => {

        if( err ) {

            res.status( 500 ).json( { success: true, errMessage: "Failed" } );
            return;

        }
        
        res.status( 200 ).json( { success: true, data: result } );
        return;

    } )

}