 function hello() {
  return 'Hello, World!';
}
console.log(hello)

// Second exercise
const EXPECTED_MINUTES_IN_OVEN=40;
 function remainingMinutesInOven(min){
  let remainingMinutes=40-min;
  return remainingMinutes;
}
const answer1=remainingMinutesInOven(33);
console.log(answer1);
function preparationTimeInMinutes(layers){
  let numberOfLayers=layers*2;
 return numberOfLayers;
}
const answer2=preparationTimeInMinutes(10);
console.log(answer2);
function totalTimeInMinutes(layers,minutes){
  let numberOfLayers=layers*2;
  let actualMinutesInOven=minutes;
 return numberOfLayers+actualMinutesInOven;
}
const answer3=totalTimeInMinutes(10,40);
console.log(answer3);

// ANNALYNS INFILTRATION EXCERCISE 3
function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake||archerIsAwake||prisonerIsAwake;
 }

 function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

function canFreePrisoner( 
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
 ) {
  return (petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake);
}

// Freelancer rates
function dayRate(ratePerHour) {
  const ratePerDay=ratePerHour*8;
   return ratePerDay;
 }
 dayRate(89);

 function daysInBudget(budget, ratePerHour) {
  const totalBudget=budget;
const hourlyRate=ratePerHour*8;
return Math.floor(totalBudget/hourlyRate);
}
daysInBudget(20000,89);

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let numberOfDays=22;
  let ratePerDay=ratePerHour*8;
  let months=Math.floor(numDays/22);
  let remainingDays=numDays%22;
  let monthlyDiscount=(months*22*ratePerDay)*(1-discount)
  return Math.ceil(monthlyDiscount+(remainingDays*ratePerDay));
  }
  priceWithMonthlyDiscount(89, 230, 0.42);

  //  Changing things to uppercase
  // function frontDoorPassword(word) {

  //   return toUpperCase(word);
  // }
  // const paragraph=frontDoorPassword("Stands so high"+
  // "Huge hooves too"+
  // "Impatiently waits for"+
  // "Reins and harness"+
  // "Eager to leave");
  // console.log(paragraph);


// // Third exercise
// function daysInBudget(budget, ratePerHour) {
//   const totalBudget=budget;
// const hourlyRate=ratePerHour*8;
// return Math.floor(totalBudget/hourlyRate);
// }
// const days=daysInBudget(20000,89);
// console.log(days);

// // Fourth exercise
// function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
//   let numberOfDays=22;
//   let ratePerDay=ratePerHour*8;
//   let months=Math.floor(numDays/22);
//   let remainingDays=numDays%22
//   let monthlyDiscount=(months*22*ratePerDay)*(1-discount)
//   return Math.floor(monthlyDiscount+(remainingDays*ratePerDay));
//   }
// const totalAmount=priceWithMonthlyDiscount(89, 230, 0.42);
// console.log(totalAmount);

// // Fourth excercise
//   function frontDoorResponse(line) {
//     return line[0];
//    }
   
//    function frontDoorPassword(word) {
  
//      return (word);
//    }
//    const test=frontDoorPassword("cookie");
//    console.log(test);


//  The fizzbuzz challenge(Trial)
var array=[];
var start=0;
function fizzbuzz(){
  let numbers=array.push(start)+1;
    if(array%3===0){
      return "Fizz";
    }
    if(array%5===0){
      return "Buzz";
    }
    else if (array%3===0&&array%5===0){
      return "FizzBuzz";
    }
    else{
      return array;
    }
  }
 
