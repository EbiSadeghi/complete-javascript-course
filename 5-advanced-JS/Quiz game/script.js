// My solution to the challenge

(function() {

var userAnswer = -1;

var possibleQuestions = ['What is Steph\'s favourite song?', 'What is Steph\'s favourite colour?', 'What is Steph\'s favourite type of dog?'];
var Numericanswers = [0,3,2] //'What a wonderful world', 'Blue', 'Golden Retriever'
var possibleAnswers = [['0 = What a wonderful world', '1 = Come fly with me', '2 = Fly me to the moon', '3 = Rozovoe Vino'],['0 = Red', '1 = Yellow', '2 = Green', '3 = Blue'],['0 = Poodle', '1 = Chiwawa', '2 = Golden Retriever', '3 = Rottweiler']];

var i = 0;
var score = 0;

function Question() {
    var dice = Math.floor(Math.random() * 3);
    userAnswer = askQuestion(dice);
    evaluateAnswer(dice);
}

function askQuestion(dice) {
    for(i = 0; i < 4; i++){
        console.log(possibleAnswers[dice][i]);
    }
    userAnswer = prompt(possibleQuestions[dice]);
    return userAnswer;
} 

function evaluateAnswer(dice){
    while(1){
        if(userAnswer === ''){
            alert('Please answer the questions');
        }else if(Number(userAnswer) == Numericanswers[dice]){
            alert('Correct!');
            score++;
        }else if(userAnswer === 'exit'){
            break;
        }else{
            alert('Wrong!');
        }
        console.log('Score: ' + score);
        Question();
    }
}

Question();

})();