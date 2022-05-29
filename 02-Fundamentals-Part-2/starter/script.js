"use strict";

/*
// function declaration
function fruitJuice(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const juice = fruitJuice(5, 8);
console.log(juice);

// *****function expression ****
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2("1991");
console.log(age2);

// *********  arrow functions   ****** //
const age3 = (birthYear) => {
  return 2037 - birthYear;
};
console.log("From arrow function: " + age3("1991"));

// coding challenge1

const calcAverage = (val1, val2, val3) => {
  return (val1 + val2 + val3) / 3;
};

const checkWinner = (avgDolphin, avgKoala) => {
  if (avgDolphin >= 2 * avgKoala) {
    console.log(`Dolphins win (${avgDolphin} vs ${avgKoala})`);
  } else if (avgKoala >= 2 * avgDolphin) {
    console.log(`Koala win (${avgKoala} vs ${avgDolphin})`);
  } else {
    console.log("No team wins");
  }
};

let avgDolphin = calcAverage(44, 23, 71);
let avgKoala = calcAverage(65, 54, 49);

checkWinner(avgDolphin, avgKoala);

// Test Data : 2
avgDolphin = calcAverage(85, 54, 41);
avgKoala = calcAverage(23, 34, 27);

checkWinner(avgDolphin, avgKoala);

// Arrays

const friendList = ["John", "Mike", "Tom"];
console.log(friendList);

const years = new Array(1991, 1992, 1993, 1994);
console.log(years);

console.log(friendList[0]);
console.log(friendList.length);

friendList[friendList.length - 1] = "Peter";
console.log(friendList);

const jonas = ["Tom", "Hanks", 30, "actor", friendList];
console.log(jonas);

const friends = ["michael", "steven", "peter"];
const newLength = friends.push("Joy");
console.log(friends);
console.log(newLength);

friends.unshift("john");
console.log(friends);
const poppedElement = friends.pop();
console.log(friends);
console.log(poppedElement);

const shiftedElement = friends.shift();
console.log(friends);
console.log(shiftedElement);
console.log(friends.indexOf("steven"));
console.log(friends.includes("steven"));
console.log(friends.includes("Steven"));


// coding challenge

const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return (15 / 100) * billValue;
  } else {
    return (20 / 100) * billValue;
  }
};
console.log(calcTip(100));

const billArray = [125, 555, 44];
const tipArray = [
  calcTip(billArray[0]),
  calcTip(billArray[1]),
  calcTip(billArray[2]),
];
const totalArray = [
  billArray[0] + tipArray[0],
  billArray[1] + tipArray[1],
  billArray[2] + tipArray[2],
];

console.log(billArray, tipArray, totalArray);


//objects

const jonas = {
  firstName: "jonas",
  lastName: "bonus",
  birthYear: 1991,
  occupation: "teacher",
  friendList: ["peter", "steven", "bob"],
  hasDriverLicense: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  calcAge: function () {
    console.log(this);
    return 2037 - this.birthYear;
  },
};

// console.log(jonas.firstName);
// console.log(jonas["firstName"]);

jonas.location = "Berlin";
jonas["gender"] = "male";
// console.log(jonas);
//console.log("age is " + jonas.calcAge(jonas.birthYear));
console.log("age of jonas is : " + jonas.calcAge());

// challenge
const sentence = `${jonas.firstName} has ${jonas.friendList.length} friends, but his best friend is ${jonas.friendList[0]}`;
//console.log(sentence);


const mark = {
  firstName: "mark",
  mass: 78,
  height: 1.69,
  calBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

const john = {
  firstName: "john",
  mass: 92,
  height: 1.95,
  calBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

const markBMI = mark.calBMI();
const johnBMI = john.calBMI();
console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
  console.log(
    `${mark.firstName}'s BMI(${markBMI}) is greater than ${john.firstName}'s BMI (${johnBMI})`
  );
} else if (johnBMI > markBMI) {
  console.log(
    `${john.firstName}'s BMI(${johnBMI}) is greater than ${mark.firstName}'s BMI (${markBMI})`
  );
}


for (let val = 0; val < 10; val++) {
  console.log("sample string");
}
*/

const jonasArray = ["jonas", 28, "teacher", ["steven", "peter", "bob"]];
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);
}

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] != "string") {
    continue;
  }
  console.log(jonasArray[i]);
}

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] == "number") {
    break;
  }
  console.log(jonasArray[i]);
}
