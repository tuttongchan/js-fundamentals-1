/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");            // "Jonas" is a VALUE
console.log(23);

let firstName = "Matilda";       // Example of variable

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";       // _ and $ can be used when naming variables
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob)


// the word "true" will identify as a BOOLEAN
let javascriptIsFun = true;
console.log(javascriptIsFun);

// "typeof" will what the type is in console log
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(23);
console.log(typeof 'Jonas');

// When you change a VARIABLE don't begin it with "let", This practice is called "Dynamic Typing"
javascriptIsFun = 'YES!'; 
console.log(typeof javascriptIsFun);   

// When you declare an empty varible it will hold value of UNDEFINED
let year;
console.log(year);
console.log(typeof year);

// Used to be UNDEFINED but variable was changed by "Dynamic Typing"
year = 1991;
console.log(typeof year);

// "null" will return "object" in the console log
console.log(typeof null)



let age = 30;
age = 31;

// "const" is a variable that cannot be changed/mutated
// You should use "const" before "let", only use "let" if you absolutely know the variable will change later
const birthYear = 1991;
birthYear = 1990;

// Does not work, needs initial value
const job;

var job = 'programmer';
job = 'teacher'



// Multiple values can be use in console log
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// "**" means to the power of so 2^3
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// adding ' ' to console log will create a space
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// "=" equal signs are known as Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah <= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

// You can define 2 variables at the same time
let x, y;
x = y = 25 - 10 - 5;    // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



//////////////////////////////////////
//  CODING CHALLENGE #1

// 1)
const heightMark = 1.69;
const weightMark = 78;
const heightJohn = 1.95;
const weightJohn = 92;

// 2)
const markBMI = weightMark / heightMark ** 2;
const johnBMI = weightJohn / heightJohn ** 2;
console.log(markBMI, johnBMI);

// 3)
const markHigherBMI = markBMI >= johnBMI;
console.log(markHigherBMI);



const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

// TEMPLATE LITERALS, use backticks `` (located above TAB bar)
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

// linebreaks are able to made when using TEMPLATE LITERALS
console.log(`String
multiple
lines`)



const age = 15;

// If Else Statements
// "else" will be executed when "if" is false
if(age >= 18) {
    console.log('Sarah can start driving license 🚜');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years to get her license :)`)
}

const birthYear = 1998; 

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);



//////////////////////////////////////
//  CODING CHALLENGE #2

const heightMark = 1.69;
const weightMark = 78;
const heightJohn = 1.95;
const weightJohn = 92;

//const heightMark = 1.88;
//const weightMark = 95;
//const heightJohn = 1.76;
//const weightJohn = 85;
 
const markBMI = weightMark / heightMark ** 2;
const johnBMI = weightJohn / heightJohn ** 2;
console.log(markBMI, johnBMI);


// 1)
if(markBMI >= johnBMI) {
    console.log(`Mark's BMI is higher (${markBMI}) than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI is higher (${johnBMI}) than Mark's (${markBMI})!`);
}



// TYPE CONVERSION
// using "Number" function will give a converted vesion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
// "NaN" means (an invalid number)
console.log(typeof NaN);

// "String" function
console.log(String(23), 23);


// TYPE COERCION
// occurs when operator is dealing with values that are different type, behind the senses JS will convert one value to match other value

// + operator trigger Coercions , numbers will convert to strings, Template Literals also do this
// "+" OPERATORS ARE THE ONLY OPERATORS THAT CONVERT NUMBERS TO STRINGS
console.log('I am ' + 23 + ' years old');  

// - , * , / , operator convert strings to numbers  
console.log('23' - '10' - 3);               
console.log('23' *  '2');

// logical operator convert strings to number
console.log('23' > '18');

let n = '1' + 1;    // '11'
n = n - 1;          // 10
console.log(n);



// 5 FALSY VALUES: 0, '', undefined null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

// "else" will chosen bcs 0 is a falsy value
const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height;
if(height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}



// "===" - Strict Equality Operator , does not perform Type Coercion , only returns 2 when values are the same
const age = '18';
if(age === 18) console.log('You just became an adult :D (strict)');

// "==" - Loose Equality Operator , performs Type Coercion
if(age == 18) console.log('You just became an adult :D (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

// Equality Operator
if (favorite === 23) { // 23 === 23
    console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
    console.log('7 is also a cool number')
} else if (favorite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9');
}

// Different Operator
if (favorite !== 23) console.log('Why not 23?');



const hasDriversLicense = true; // variable A
const hasGoodVision = true; // variable B

// AND OPERATOR "&&" both values need be true for it to be true
console.log(hasDriversLicense && hasGoodVision);

// OR OPERATOR "||" need at least 1 to be true
console.log(hasDriversLicense || hasGoodVision);

// NOT OPERATOR "!" inverts the value
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Some else should drive...')
// }

const isTired = false; // variable C
// can add more than 2 variables
console.log(hasDriversLicense || hasGoodVision || isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Some else should drive...');
}



//////////////////////////////////////
//  CODING CHALLENGE #3


// group the adding operators togethter so the division operator can display prescedence
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

//console.log(96 + 108 + 89 / '3');
//console.log(88 + 91 + 110 / '3');

// if (scoreDolphins > scoreKoalas) {
//     console.log('DOLPHINS WIN 😜');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('KOALAS WIN 😝');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('DOLPHINS WIN 😜');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('KOALAS WIN 😝');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy');
} else {
    console.log('No one wins the trophy 😭');
}



const day = 'monday';

// SWTICH STATEMENT , use a colon ":" for first line in block
// "breaks" - meant to stop the continuation of cases
switch(day) {
    case 'monday': // means day === monday
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos')
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}



// EXPRESSIONS - produces values
3 + 4
1991
true && false && !false

// STATEMENTS - creates actions and does not produce a values
if (23>10) {
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old. ${me}`)



// CONDITIONAL (TERNARY) OPERATOR
const age = 15;
// "age >= 18 ?" means condition
// "?" means "if"         
// If block (needs colon at the end ":")
age >= 18 ? console.log('I like to drink wine 🍷') :   
console.log('I like to drink water 💧');    // else block

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

// You can have CONDITIONALS inside of TEMPLATE LITERALS
// ${}
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/


//////////////////////////////////////
//  CODING CHALLENGE #4

const bill = 275
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
