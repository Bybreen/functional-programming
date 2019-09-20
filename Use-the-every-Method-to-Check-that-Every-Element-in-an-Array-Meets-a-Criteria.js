// Use the everymethod inside the checkPositivefunction to check if every element in arris positive.
// The function should return a Boolean value.

function checkPositive(arr) {
  
  return arr.every(val => val > 0);
}
checkPositive([1, 2, 3, -4, 5]);
