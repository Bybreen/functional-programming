// Use the joinmethod (among others) inside the sentensifyfunction to make a sentence from the words in the string str. 
// The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". 
// For this challenge, do not use the replace method.

function sentifisy(str) {
return str.split(/\W/).join(" ");

sentensify("May-the-force-be-with-you");
