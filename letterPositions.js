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
    console.log(`❌❌❌ Assertion Failed: ${arr2} !== ${arr2}`)
  }
}

const letterPositions = function(arr1) {
  const results = {}
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== " ") {
      results[arr1[i]] ? results[arr1[i]].push(i) : results[arr1[i]] = [i];
    } 
  }
  return results;
}
assertArraysEqual(letterPositions("hello").o, [4]);