const { calculateBMI } = require( './helper' );

test('BMI of 175cm height and 75Kg weight is 24.49kg/m2', () => {

    let person = {
        "Gender": "Male", 
        "HeightCm": 175, 
        "WeightKg": 75 
    };

    let output = {
        "Gender": "Male",
        "HeightCm": 175,
        "WeightKg": 75,
        "bmi": "24.5",
        "bmiCategory": "Normal Weight",
        "healthRisk": "Low Risk"
    }

    expect( calculateBMI( person ) ).toEqual( output );
});