const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
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
  
const takeUntil = function(array, callback) {
  let newArray = []
  for (let element of array) {
  if (!callback(element)) {
    newArray.push(element);
  } else {
    break
  }
}
return newArray
}


  const results1 = takeUntil(data1, x => x < 0);
  console.log(results1);
  
  console.log('---');
  
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  console.log(results2);

  // not sure what to put here to test

  assertArraysEqual(eqArrays([data2], [data2]), true);
  assertArraysEqual(eqArrays([data1], [data1]), false);
  assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);