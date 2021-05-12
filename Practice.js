/**
 * Sequence Practice Problems
 */
//1. Generate random number
let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

//2. Rolling dice
let diceRoll = Math.floor(1 + ((Math.random() * 10) % 6));
console.log(diceRoll);

//3. Adding two random dice numbers
let diceRoll1 = Math.floor(1 + ((Math.random() * 10) % 6));
let diceRoll2 = Math.floor(1 + ((Math.random() * 10) % 6));
console.log(diceRoll1 + diceRoll2);

//4. a program that reads 5 Random 2 Digit values, then finding their sum and the average
let i = 1;
let sum = 0;
while (i <= 5) {
  sum += Math.floor(10 + ((Math.random() * 10) % 90));
  i++;
}
let avg = sum / (i - 1);

console.log("sum = " + sum + " and average = " + avg);

/**
 * 5. Unit conversion
 */
//a. 1ft = 12 in then 42 in = ? ft
let feet = 42 / 12;
console.log("42 in = " + feet + " ft");

//b. Rectangular Plot of 60 feet x 40 feet in meters
let meter = 40 * 60 * 0.3048;
console.log(meter);

//c. Calculate area of 25 such plots in acres
let area = 60 * 40 * 0.3048 * 25 * 0.00024711;
console.log(area);

/**
 * Selection problems with if-else
 */
/**
 * 1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value
*/
let n = 0;
let max = Math.floor(100 + ((Math.random() * 10) % 900));
let min = max;
console.log(max);
while (n < 4) {
  randomNumber = Math.floor(100 + ((Math.random() * 10) % 900)); //generates 3 digit numbers
  console.log(randomNumber);
  if (max < randomNumber) {
    max = randomNumber;
  }
  if (min > randomNumber) {
    min = randomNumber;
  }
  n++;
}
console.log("maximun is: " + max + " and minimum is: " + min);

/**

2. Write a program that takes day and month from the command line and prints true if
day of month is between March 20 and June 20, false otherwise.
*/
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
console.log("day: " + day);
console.log("month: " + month);

if (month >= 3 && month <= 6) {
  if (month == 3) {
    if (day >= 20) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  if (month == 6) {
    if (day <= 20) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  if (month > 3 && month < 6) {
    console.log(true);
  }
} else {
  console.log(false);
}

/*
3. Write a program that takes a year as input and outputs the Year is a Leap Year or not
a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
divisible by 400.
*/
let year = new Date().getFullYear();
if (year % 4 == 0) {
  if (year % 100 != 0) {
    console.log(year + " is leap year!");
  } else {
    if (year % 400 == 0) {
      console.log(year + " is leap year!");
    }
  }
} else {
  console.log(year + " is not a leap year!");
}

/*
4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
 */
let coin_flipped = Math.floor((Math.random() * 10) % 2);
let HEADS = 0;
let TAILS = 1;

if (coin_flipped == HEADS) {
  console.log("HEADS!");
}
if (coin_flipped == TAILS) {
  console.log("TAILS!");
} else {
  console.log("Coin flipped, but failed to get result!");
}

/*
/**
 * Selection problems with if-else-if
 */
/**
 * 1. Read a single digit number and write the number in word
 * */
let number = Math.floor(Math.random() * 10);
console.log("number entered: " + number);

if (number == 0) {
  console.log("zero");
} else if (number == 1) {
  console.log("one");
} else if (number == 2) {
  console.log("two");
} else if (number == 3) {
  console.log("three");
} else if (number == 4) {
  console.log("four");
} else if (number == 5) {
  console.log("five");
} else if (number == 6) {
  console.log("six");
} else if (number == 7) {
  console.log("seven");
} else if (number == 8) {
  console.log("eight");
} else if (number == 9) {
  console.log("nine");
} else {
  console.log("Not a number!");
}

/*
2. Read a Number and Display the week day (Sunday, Monday,…)
*/
let number1 = Math.floor(1 + Math.random() * 10);
console.log("number entered: " + number1);

if (number == 1) {
  console.log("SUNDDAY");
} else if (number == 2) {
  console.log("MONDAY");
} else if (number == 3) {
  console.log("TUESDAY");
} else if (number == 4) {
  console.log("WEDNESDAY");
} else if (number == 5) {
  console.log("THURSDAY");
} else if (number == 6) {
  console.log("FRIDAY");
} else if (number == 7) {
  console.log("SATURDAY");
} else {
  console.log("Unknown!");
}

/*
3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
*/
let number2 = 1; //100,100,1000
if (number2 == 1) {
  console.log("unit");
} else if (number2 == 10) {
  console.log("ten");
} else if (number2 == 100) {
  console.log("hundred");
} else if (number2 == 1000) {
  console.log("thausand");
} else {
  console.log("Number entered is out of range!");
}

/*
4. Enter 3 Numbers do following arithmetic operation and find the one that
is maximum and minimum
1. a + b * c 3. c + a / b
2. a % b + c 4. a * b + c
 */
let a = 5,
  b = 6,
  c = 2;

let operation1 = a + b * c;
let operation2 = c + a / b;
let operation3 = (a % b) + c;
let operation4 = a * b + c;
console.log(operation1);
console.log(operation2);
console.log(operation3);
console.log(operation4);
let maximum = Math.max(operation1, operation2, operation3, operation4);
console.log(maximum);
let minimum = Math.min(operation1, operation2, operation3, operation4);
console.log(minimum);

/**
 * Selection problems with case statement
 */
/**
 * 1. Read a single digit number and write the number in word using Case
 * */
let number3 = Math.floor(Math.random() * 10);
console.log("number entered: " + number3);
switch (number) {
  case 0:
    console.log("zero");
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  case 4:
    console.log("four");
    break;
  case 5:
    console.log("five");
    break;
  case 6:
    console.log("six");
    break;
  case 7:
    console.log("seven");
    break;
  case 8:
    console.log("eight");
    break;
  case 9:
    console.log("nine");
    break;
  default:
    console.log("Not a number!");
}

/*
2. Read a Number and Display the week day (Sunday, Monday,…)*/
let number4 = Math.floor(1 + ((Math.random() * 10) % 7));
console.log("number entered: " + number4);
switch (number4) {
  case 1:
    console.log("SUNDAY");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WEDNESDAY");
    break;
  case 4:
    console.log("THURSDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  case 6:
    console.log("SATURDAY");
    break;
  case 7:
    console.log("MONDAY");
    break;
  default:
    console.log("Invalid!");
}
/*
3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
*/
let number5 = 10; //100,100,1000
switch (number5) {
  case 1:
    console.log("unit");
    break;
  case 10:
    console.log("ten");
    break;
  case 100:
    console.log("hundred");
    break;
  case 1000:
    console.log("thausand");
    break;
  default:
    console.log("Number entered is out of range!");
}

/*
4. Write a program that takes User Inputs and does Unit Conversion of
different Length units
1. Feet to Inch 3. Inch to Feet
2. Feet to Meter 4. Meter to Feet
 */
const readline = require("readline").createInterface({
  input: process.stdin,
});

readline.question("Enter a number", (inputNumber) => {
  number6 = inputNumber;
});
console.log("Enter a length to convert units: ");
console.log("Select option to convert units:");
console.log("1) Feet to Inch 2) Feet to Metre");
console.log("3) Inch to Feet 4) Metre to Feet");

readline.question("Choose the option", (option1) => {
  switch (option1) {
    case 1:
      console.log(number6 * 12 + "inches");
      break;
    case 2:
      console.log(number6 * 0.3048 + "meters");
      break;

    case 3:
      console.log(number6 * 0.8333 + "feet");
      break;

    case 4:
      console.log(number6 * 3.28 + "feet");
      break;

    default:
      console.log("invalid option!");

      readline.close();
  }
});

/**
 * Selection problems with for loop
 */
/**
 * 1. Write a program that takes a command-line argument n and prints a table of the
powers of 2 that are less than or equal to 2^n.
*/
const readline1 = require("readline").createInterface({
  input: process.stdin,
});
let powers = 1;
readline1.question("Enter a number", (number7) => {
  for (let i = 1; i <= number7; i++) {
    powers = powers * 2;
    console.log(powers);
  }
  readline1.close();
});

/*
2. Write a program that takes a command-line argument n and prints the nth harmonic
number. Harmonic Number is of the form*/
const readline2 = require("readline").createInterface({
  input: process.stdin,
});

readline2.question("Enter a number", (number8) => {
  let harmonic = "";
  for (let i = 1; i <= 5; i++) {
    console.log(harmonic + "1/" + i + " or " + 1 / i);
  }
});

/*
3. Write a program that takes a input and determines if the number is a prime.
*/
const readline3 = require("readline").createInterface({
  input: process.stdin,
});

readline3.question("Enter a number", (number9) => {
  let isPrime = true;
  for (let i = 2; i <= number9 / 2; i++) {
    if (number9 % i == 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime);
  readline3.close();
});

/*
4. Extend the program to take a range of number as input and output the Prime
Numbers in that range.
*/
const readline4 = require("readline").createInterface({
  input: process.stdin,
});

readline4.question("Enter a minimum number", (number10) => {
  readline4.question("Enter a maximum number", (number11) => {
    for (let j = number10; j <= number11; j++) {
      let isPrime = true;
      for (let i = 2; i <= j / 2; i++) {
        if (j % i == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime == true) {
        console.log(j);
      }
    }

    readline4.close();
  });
});

/*
5. Write a program that computes a factorial of a number taken as input.
5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
*/
const readline5 = require("readline").createInterface({
  input: process.stdin,
});

let factorial = 1;
readline5.question("Enter a number", (number12) => {
  for (let i = number12; i >= 1; i--) {
    factorial = factorial * i;
  }
  console.log(factorial);
  readline5.close();
});

/**
 * Relational problems
 */
/**
 * 1. Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached..*/
const readline6 = require("readline").createInterface({
  input: process.stdin,
});

let powers1 = 1;

readline6.question("Enter a number", (number7) => {
  let k = 1;
  while (k <= number7) {
    k++;
    powers1 = powers1 * 2;
    console.log(powers1);
  }
  readline6.close();
});

/*
2. Find the Magic Number
a. Ask the user to think of a number n between 1 to 100
b. Then check with the user if the number is less then n/2 or greater
c. Repeat till the Magic Number is reached..
*/

/*
3. Extend the Flip Coin problem till either Heads or Tails wins 11 times.
 */

/*
4. Write a Program where a gambler starts with Rs 100 and places Re 1 bet
until he/she goes broke i.e. no more money to gamble or reaches the
goal of Rs 200. Keeps track of number of times won and number of bets
made.
 */

/**
 * Function practice problems
 */
/**
 * 1. Help user find degF or degC based on their Conversion Selection. Use
Case Statement and ensure that the inputs are within the Freezing Point (
0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
a. degF = (degC * 9/5) + 32
b. degC = (degF – 32) * 5/9
*/

/*
2. Write a function to check if the two numbers are Palindromes
*/

/*
3. Take a number from user and check if the number is a Prime then show
that its palindrome is also prime
a. Write function check if number is Prime
b. Write function to get the Palindrome.
c. Check if the Palindrome number is also prime
 */


