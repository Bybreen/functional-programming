// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  this.forEach(function(b) {
    if (callback(b) === true) {
      newArray.push(b);
    }
  })
  return newArray;

};
