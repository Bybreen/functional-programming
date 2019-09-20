// Use the some method inside the checkPositivefunction to check if any element in arr is positive. 
// The function should return a Boolean value.

function checkPositive(arr) {
  return arr.some((val) => val > 0);
}
checkPositive([1, 2, 3, -4, 5]);
