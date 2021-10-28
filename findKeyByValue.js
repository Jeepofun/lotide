const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed:  ${expected} === ${expected}`);
  else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(object, value) {
const keysArr = Object.keys(object);
for (let show of keysArr) {
  if (object[show] === value)
  return show;
}
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "comedy")