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
function eqArrays () {
const arrA = []
const arrB = []

if (arrA.length !== arrB.length)
return "False"
else 
{
  for (var i = 0; i < arrA.length ; i++)
  if (arrA[i] !== arrB[i])
  return "false";
  return "true"
}
}
const compare = eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true)
assertEqual(compare[0], [1]);
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!