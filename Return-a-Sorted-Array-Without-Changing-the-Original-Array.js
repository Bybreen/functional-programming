// Use the sortmethod in the nonMutatingSortfunction to sort the elements of an array in ascending order. 
// The function should return a new array, and not mutate the globalArrayvariable.

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  })
 
}
nonMutatingSort(globalArray);
