/*
 * Destructuring
 */

 // ES5
 var john = ['John', 26];
 //var name = john[0];
 //var age = john[1];

 // ES6
 const [name, age] = ['John', 26];
 console.log(name);
 console.log(age);

 const obj = {
     firstName: 'John',
     lastName: 'Smith'
 }

 const {firstName, lastName} = obj;
 console.log(firstName);
 console.log(lastName);

 const {firstName: a, lastName: b} = obj;
 console.log(a);
 console.log(b);



 function calcAgeRetirement(year) {
     const age = new Date().getFullYear() - year;
     return [age, 65 - age];
 }

 const [age2, retirement] = calcAgeRetirement(1990);
 console.log(age2);
 console.log(retirement);


 /*
  * Arrays
  */


  // Change colors to blue
  const boxes = document.querySelectorAll('.box');

  // ES5
  var boxesArr5 = Array.prototype.slice.call(boxes);
  boxesArr5.forEach(function(cur) {
      cur.style.backgroundColor = ' dodgerblue';
  });

  // ES6
  const boxesArr6 = Array.from(boxes);
  boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

  // ES6 v2
  Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


  // Change text to indicate color change
  // ES5
  for( var i = 0; i < boxesArr5.length; i++) {
      if(boxesArr5[i].className === 'box blue'){
          continue;
      }

      boxesArr5[i].textContent = ' I changed to blue!';
  }

  // ES6
  for (const cur of boxesArr6) {
      if (cur.className === 'box blue') {
          continue;
      }
      cur.textContent = "I changed to blue!";
  }

  // ES6 v2
  for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = "I changed to blue!";
  }


  // Children age determination
  // ES5
  var ages = [12,17,8,21,14,11];

  var full = ages.map(function(cur){
      return cur >= 18;
  });

  console.log(full); //[ false, false, false, true, false, false ]
  console.log(full.indexOf(true)); // 3
  console.log(ages[full.indexOf(true)]); //21

  // ES6
  console.log(ages.findIndex(cur => cur >= 18)); // 3
  console.log(ages.find(cur => cur >= 18)); // 21

/*
 * Spread Operator
 */
  function addFourAges(a,b,c,d){
      return a+b+c+d;
  }

  var sum1 = addFourAges(18,30,12,21);
  console.log(sum1);

  // ES5
  var ages = [18, 30, 12, 21];
  var sum2 = addFourAges.apply(null, ages); // Apply elements of array as arguments
  console.log(sum2);

  // ES6
  const max3 = addFourAges(...ages);


  const familySmith = ['John', 'Jane', 'Mark'];
  const faimlyMiller = ['Mary', 'Bob', 'Ann'];
  const bigFamily = [...familySmith, 'Lily', ...faimlyMiller];
  console.log(bigFamily);

  const h = document.querySelector('h1');
  //const boxes = document.querySelectorAll('.box'); // Already defined
  const all = [h, ...boxes]; // Take node list

  Array.from(all).forEach(cur => cur.style.color = 'purple');


/*
 * Rest parameters (opposite of spread)
 */

 // ES5
 function isFullAge5(){
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur){
        console.log((2019 - cur) >= 18);
    })
 }

 isFullAge5(1990, 1999, 1965);
 isFullAge5(1990, 1999, 1965, 2016, 1987);

 // ES6
 function isFullAge6(...years){
    years.forEach(cur => console.log((2019 - cur) >= 18));
 };

 isFullAge6(1990, 1999, 1965);
 isFullAge6(1990, 1999, 1965, 2016, 1987);



  // ES5
  function isFullAge5b(limit){
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(cur){
        console.log((2019 - cur) >= limit);
    })
 }

 isFullAge5b(21, 1990, 1999, 1965);
 isFullAge5b(16, 1990, 1999, 1965, 2016, 1987);

 // ES6
 function isFullAge6b(limit, ...years){
    years.forEach(cur => console.log((2019 - cur) >= limit));
 };

 isFullAge6b(21, 1990, 1999, 1965);
 isFullAge6b(16, 1990, 1999, 1965, 2016, 1987);

 
/*
 * Default Parameters
 */

 // ES5
 function SmithPerson(firstName,yearOfBirth, lastName, nationality){
     
     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
     nationality === undefined ? nationality = 'American' : nationality = nationality; 

     this.firstName = firstName;
     this.lastName = lastName;
     this.yearOfBirth = yearOfBirth;
     this.nationality = nationality;
 }

 var john = new SmithPerson('John', 1990);
 var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish')

 // ES6
 function SmithPerson(firstName,yearOfBirth, lastName = 'Smith', nationality = 'American'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish')

/*
 * Map data type
 */

 const question = new Map();
 question.set('question', 'What is the offical name of the latest major JavaScript version?');
 question.set(1, 'ES5');
 question.set(2, 'ES6');
 question.set(3, 'ES2015');
 question.set(4, 'ES7');
 question.set('correct', 3);
 question.set(true, 'Correct answer =)');
 question.set(false, 'Wrong, please try again!');

 console.log(question.get('question'));
 console.log(question.size);

 question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

 for(let [key, value] of question.entries()) {
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
 }

 const ans = parseInt(prompt('Write the correct answer'));
 //ans === question.get('answer'); // True or False
 alert(question.get(ans === question.get('correct')));

 if(question.has(4)){
    question.delete(4);
 }

 question.clear(); // Deletes everything

/*
 * Classes
 */

 // ES5
 var Person5 = function(name, yearOfBirth, job) {
     this.name = name;
     this.yearOfBirth = yearOfBirth;
     this.job = job;
 } 

 Person5.prototype.calculateAge = function() {
     var age = new Date().getFullYear() - this.yearOfBirth;
     console.log(age);
 }

 var john5 = new Person5('John', 1990, 'teacher');

 // ES6 - similar to Java class
 class Person6 {
     constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
     }

     calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
     }

     static greeting(){ // Cannot be inherited 
         console.log('Hey there!');
     }
 }

 const john6 = new Person6('John', 1990, 'teacher');

 Person6.greeting();

/*
 * Sub Classes (uses the person classes from before)
 */

 // ES5
 var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
     Person5.call(this, name, yearOfBirth, job);
     this.olympicgames = olympicGames;
     this.medals = medals;
 }

 /*Athlete5.prototype.wonMedal = function() {
     this.medals++;
     console.log(this.medals);
 }*/ // Doesn't work here, you need to connect i

 Athlete5.prototype = Object.create(Person5.prototype);

 Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
 } // First set Athlete5 protoype property, and then add medals

 var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

 johnAthlete5.calculateAge();
 johnAthlete5.wonMedal();

 // ES6
 class Athlete6 extends Person6 {
     constructor(name, yearOfBirth, job, olympicGames, medals){
         super(name, yearOfBirth, job);
         this.olympicGames = olympicGames;
         this.medals = medals;
     }

     wonMedal() {
         this.medals++;
         console.log(this.medals);
     }
 }

 const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

 johnAthlete6.wonMedal();
 johnAthlete6.calculateAge();


 // Test
 class AthleteH extends Person5 {
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthleteH = new AthleteH('John', 1990, 'swimmer', 3, 10);

johnAthleteH.wonMedal();
johnAthleteH.calculateAge();