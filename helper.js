exports.calculateBMI = ( person ) => {

    let bmi = (person.WeightKg / ((person.HeightCm / 100) * (person.HeightCm / 100)));

    let newPerson = {

        ...person,
        bmi: parseFloat(bmi).toFixed(1),

    }

    newPerson.bmiCategory =
        (bmi >= 40) ? 'Very Severely Obese' :
            (bmi >= 35) ? 'Severely Obese' :
                (bmi >= 30) ? 'Moderately Obese' :
                    (bmi >= 25) ? 'Over Weight' :
                        (bmi >= 18.5) ? 'Normal Weight' : 'Under Weight';

    newPerson.healthRisk =
        (bmi >= 40) ? 'Very High Risk' :
            (bmi >= 35) ? 'High Risk' :
                (bmi >= 30) ? 'Medium Risk' :
                    (bmi >= 25) ? 'Enhanced Risk' :
                        (bmi >= 18.5) ? 'Low Risk' : 'Malnutrition risk';

    
    return newPerson;
                        
}