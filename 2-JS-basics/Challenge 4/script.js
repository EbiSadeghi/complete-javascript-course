//BMI = mass / height^2, mass in kg, height in m

var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 60,
    height: 1.3,
    BMI: function(mass, height){
        this.BMI = this.mass / this.height / this.height;
        return this.BMI;
    }
};

var mark = {
    firstName: 'Mark',
    lastName: 'Parker',
    mass: 85,
    height: 2.0,
    BMI: function(mass, height){
        this.BMI = this.mass / this.height / this.height;
        return this.BMI;
    }
};


console.log(john.BMI(), mark.BMI());

//Using if/else

if(john.BMI > mark.BMI){
    console.log('John ' + john.lastName + '\'s' + ' BMI is higher than Mark\'s. The BMI is: ' + john.BMI);
}
else if(john.BMI === mark.BMI){
    console.log('They have the same BMI!');
}
else{
    console.log('Mark ' + mark.lastName + '\'s' + ' BMI is higher than Mark\'s. The BMI is: ' + mark.BMI);
}