//BMI = mass / height^2, mass in kg, height in m

var scoreJohn1, scoreJohn2, scoreJohn3, scoreMark1, scoreMark2, scoreMark3, scoreMary1, scoreMary2, scoreMary3;
scoreJohn1 = 30;
scoreJohn2 = 35;
scoreJohn3 = 25;

scoreMark1 = 19;
scoreMark2 = 35;
scoreMark3 = 20;

scoreMary1 = 40;
scoreMary2 = 10;
scoreMary3 = 35;

scoreJohn = ( scoreJohn1 + scoreJohn2 + scoreJohn3 )/3;
scoreMark = ( scoreMark1 + scoreMark2 + scoreMark3 )/3;
scoreMary = ( scoreMary1 + scoreMary2 + scoreMary3)/3;
console.log(scoreJohn, scoreMark, scoreMary);


if(scoreJohn > scoreMark && scoreJohn > scoreMary){
    console.log('John\'s team wins!');
}
else if(scoreMark > scoreJohn && scoreMark > scoreMary){
    console.log('Mark\'s team wins!');
}
else if (scoreMary > scoreJohn && scoreMary > scoreMark){
    console.log('Mary\'s team wins!');
}
else{
    console.log('Someone has tied!');
}