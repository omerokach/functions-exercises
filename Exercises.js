"use strict"
//Question 1
function myReverse(str) {
  // your code here
  let newStr = '';
  for(let i=str.length-1 ; i>-1; i--){
    newStr += str[i];
  }
  return newStr;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  let comb;
  // your code here
  for(let i=0; i<str.length-1; i++){
    comb = str[i];
    combinations.push(str[i]);
    for(let k=i+1; k<str.length; k++){
     comb += str[k];
     combinations.push(comb);
    }
  }
  //
  return combinations;
}

//Question 3
function allCaps(str) {
  // your code here
  return "";
}

//Question 4
function myPower(x, n) {
  // your code here
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own
let x = "omer";
console.log(allCombinations(x));
// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
