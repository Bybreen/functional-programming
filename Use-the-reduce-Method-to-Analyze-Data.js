// The variable watchListholds an array of objects with information on sev fieral movies. Use reduceto find the average 
// IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filterdata and mapover 
// it to pull what you need. You may need to create other variables, but save the final average into the variable averageRating.
// Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any 
// mathematical operations.

const shrink = (accummulator, currentValue) => {
return accummulator + parseFloat(currentValuye['imdbRating']);

var filteredMovies = watchList.filter(movie =>movie['Director'] ==='Christopher Nolan');

var averageRating = filteredMovies.reduce(shrink, 0) / filteredMovies.length

console.log(averageRating);
