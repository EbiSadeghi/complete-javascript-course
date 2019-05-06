console.log("Hello World!!!");

var firstName = 'John'; //camelCase is convention in JS
console.log(firstName);

var lastName = 'Smith';
var age = 28; //All numbers are float by default
console.log(lastName);
console.log(age);

var fullAge = true;
console.log(fullAge);

var job; //Undefined var
console.log(job);

job = 'Teacher'; //Define as string
console.log(job);

//"var 3years" is improper; must start with letter, $, or _
var $years = 3;
var _3years = 3;

//JS can deal with different types
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'professor';
isMarried = false;

console.log(firstName + 'is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

//Alerts and prompts
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

//Type of
console.log(typeof lastName);

var x;
console.log(typeof x);

//Operator BEDMAS
var now = 2019;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark)/2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; //26 
//Due to double assignment associativity (right to left)
//Bitwise operands have flipped associativity 
console.log(x,y);

//*=, /=, +=, -=, ++, --, etc all still apply 

//If / Else

var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married!');
}
else{
    console.log(firstName + ' will hopefully marry soon');
}

var isMarried = true;
if (isMarried){
    console.log(firstName + ' is married!');
}
else{
    console.log(firstName + ' will hopefully marry soon');
}

//Use "else if" form, &&, ||, and ! still apply
//==, ===, >=, <=, != still apply

//Ternary still applies
age = 3;
console.log(age);
age >= 18 ? console.log('He drinks beer') : console.log('He drinks juice');


//Cases

switch(job){
    case 'teacher':
        console.log("He is a teacher");
        break;
    case 'driver':
        console.log('He is a driver');
        break;
    default:
        console.log('Does something else');
}


age = 14;
console.log('Age: ' + age);
switch(true){
    case age < 13:
        console.log("He is a boy");
        break;
    case age >= 13 && age < 20:
        console.log('He is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log('He is a young man');
        break;
    default:
        console.log('He is a man');
}

//Truthy and Falsy

//Falsey: undefined, null, 0, '', NaN
//Truthy: everything else

var height;
if(height || height === 0){
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

height = 23;
if (height === '23'){
    console.log('This will be evaluated as true!');
}

//Functions
function calculateAge(birthYear){
    return 2019 - birthYear;
}

var ageJane = calculateAge(1969);
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);

console.log(ageJane, ageJohn, ageMike);

function yearsUntilRetirement(birthYear, firstName)
{
    var age = calculateAge(birthYear);
    var retirement = 65 - age;
    if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired');
    }
}

var Jane, John, Mike;
Mike = 'Mike';
yearsUntilRetirement(1969, 'Jane');
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, Mike);

//Arrays
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);
 
names.push('blue');
names.pop();

names.unshift('Alex');
names.shift();

console.log(names.indexOf('Ben')); //1
console.log(names.indexOf(23)); //-1

//Objects

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
varx = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object;

//Methods

var bob = {
    firstName: 'Bob',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear){
        return 2019 - birthYear;
    }
};

console.log(bob.calcAge(1990));

var emily = {
    firstName: 'Emily',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear){
        return 2019 - this.birthYear;
    }
};

console.log(emily.calcAge());
emily.age = emily.calcAge();

/*loops
for
while
continue
break
all are same as before
*/