// Use the split method inside the splitifyfunction to split strinto an array of words. The function should return the array. 
// Note that the words are not always separated by spaces, and the array should not contain punctuation.

function splitify(str@) {
return str.split(/\W/);
}
Splitify('Hello World, I am Code');
