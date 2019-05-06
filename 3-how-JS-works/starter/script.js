///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1965);

function calculateAge(year){
    console.log(2019 - year);
}

calculateAge(1998);




var retirement = function(year){
    console.log(65 = (2019 - year));
}

retirement(1956);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


//in a function this -> object (window)

//in a method this -> object

//in a function inside a method this -> window






