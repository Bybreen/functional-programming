// the global variable

var fixedValue = 4;

function incrementer (a) {
return fixedValue +1;
}

var newValue = incrementer(fixedValue); // should be 5
console.log(fixedValue); // should print 4
