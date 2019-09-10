// the global variable

var fixedValue = 4;
function incrementer () {
return fixedValue + 1;
}

var newValue = incrementer(); // should equal 5
console.log(fixedValue); // should print 4
