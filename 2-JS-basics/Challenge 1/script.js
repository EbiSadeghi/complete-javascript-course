//BMI = mass / height^2, mass in kg, height in m

var massJohn = 60;
var heightJohn = 1.3;

var massMark = 85;
var heightMark = 2.0;

var BMIJohn = massJohn / heightJohn / heightJohn;
var BMIMark = massMark / heightMark / heightMark;
console.log(BMIJohn, BMIMark);

isBMIMarkLarger = BMIMark > BMIJohn;
console.log("Is Mark's BMI larger than John's? " + isBMIMarkLarger);
alert("Is Mark's BMI larger than John's? " + isBMIMarkLarger);


//Using if/else

if(BMIJohn > BMIMark){
    console.log('John\'s BMI is higher than Mark\'s');
}
else if(BMIJohn === BMIMark){
    console.log('They have the same BMI!');
}
else{
    console.log('Mark\'s BMI is higher than John\'s');
}