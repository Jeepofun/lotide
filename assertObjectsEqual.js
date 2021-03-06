const inspect = require('util').inspect;

const assertEqual = function (actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed:  ${expected} === ${expected}`);
  else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};
const eqArrays = function (arr1, arr2) {
  let output = true;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
      output = output && eqArrays(arr1[i], arr2[i]);
    } else if (arr1[i] !== arr2[i]) {
      output = output && false;
    }
  }
  return output;
};

const eqObjects = function (object1, object2) {
  let output = true;
  const arr1 = Object.keys(object1);
  const arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) return false;
  else {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        output = (eqArrays(object1[key], object2[key]));
      } else if (object1[key] !== object2[key]) output === false;
    }
  }
  return output
}

const assertObjectsEqual = function (actual, expected) {
  
  if (!eqObjects(actual, expected)) {
    return (console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  }
  return (console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`));
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" }
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);


