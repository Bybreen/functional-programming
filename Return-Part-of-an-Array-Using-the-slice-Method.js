// Use the slice method in the sliceArrayfunction to return part of the anim array 
// given the provided beginSlice and endSliceindices. The function should return an array.

function sliceArray(anim, beginSlice, endSlice) {
  
  return anim.slice(beginSlice, endSlice);
 
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
