const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅ Assertion Passed:  ${expected} === ${expected}`);
  else console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};
function head(a) {
  let x = a[0];
  return x;
}
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 2);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["hello", "Lighthouse", "labs"]), "hello");
assertEqual(head(["hi"]), "no");
assertEqual(head([]));
