// Refactor (rewrite) the code so the global array bookList is not changed inside either function. 
// The addfunction should add the given bookNameto the end of an array. The removefunction should remove the given bookNamefrom an array. 
// Both functions should return an array, and any new parameters should be added before the bookNameone.

// the global variable

var bookList = ['The Hound of the Baskervilles', 'On the Electrodynamics of Moving Bodies', 'Philosophy Naturalis Principia Mathematica',
'Disquisitiones Arithimetica'];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

function add (list, bookName) {
return [...list, bookName];
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

function remove (list.bookName) {
if (list.indexOf(bookName) => 0) {

return list.filter(item) => !== bookName);
}
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On the Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On the Electrodynamics of Moving Bodies');

console.log(bookList);
