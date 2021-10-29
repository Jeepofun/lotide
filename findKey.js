const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed:  ${expected} === ${expected}`);
  else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};


const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key]))
    return key
  }
}

 assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, 
x => x.stars === 2), "noma") // => "noma"


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, 
x => x.stars === 2), "Ora")
// first test with a mock value to show that the test worked
// second test with original data to show that the test worked but the assertion failed

//  assertEqual(findKey("Blue Hill"), 1)

//not sure how to test this