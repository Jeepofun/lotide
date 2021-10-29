const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed:  ${expected} === ${expected}`);
  else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};
function head(a) {
  let x = a[0];
  return x;
}
function tail(arr) {
  return arr.slice(1);
}
const eqArrays = function(arr1, arr2) {
  let output = true;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i ++) {
    if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
      output = output && eqArrays(arr1[i], arr2[i]);
    } else if (arr1[i] !== arr2[i]) {
      output = output && false;
    }
  }
  return output;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed:  ${arr1} === ${arr2}`)
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`)
  }
}
// code may be lacking here
([1, 2, 3], [1, 2, "4"])

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!