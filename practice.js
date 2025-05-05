export function hello() {
  return 'Hello, World!';
}
console.log(hello)

// Second exercise
export const EXPECTED_MINUTES_IN_OVEN=40;
export function remainingMinutesInOven(min){
  let remainingMinutes=40-min;
  return remainingMinutes;
}
const answer1=remainingMinutesInOven(33);
console.log(answer1);
export function preparationTimeInMinutes(layers){
  let numberOfLayers=layers*2;
 return numberOfLayers;
}
const answer2=preparationTimeInMinutes(10);
console.log(answer2);
export function totalTimeInMinutes(layers,minutes){
  let numberOfLayers=layers*2;
  let actualMinutesInOven=minutes;
 return numberOfLayers+actualMinutesInOven;
}
const answer3=totalTimeInMinutes(10,40);
console.log(answer3);



