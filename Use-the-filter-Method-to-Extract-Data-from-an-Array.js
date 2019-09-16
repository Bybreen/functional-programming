// The variable watchListholds an array of objects with information on several movies. 
// Use a combination of filterand mapto return a new array of objects with only titleand 
// ratingkeys, but where imdbRatingis greater than or equal to 8.0. Note that the rating values 
// are saved as strings in the object and you may want to convert them into numbers to perform mathematical operations on them.

var watchList = [ {
'Title': 'Inception',
'Year': '2010',
'Rated': 'PG-13',
'Released;: 'July 16th 2010',
'Runtime': '148 minutes',
'Genre': 'Action, Adventure, Crime',
'Writer': 'Christopher Nolan',
'http://ia.media-imdb.com/images
'Metascore': '74',
'imdbRatiing': '8.8',
'Type': 'Movie',
'Response': 'True',

},
var filteredList = watchList.map(function(e) {
  return {title: e["Title"], rating: e["imdbRating"]}
}).filter((e) => e.rating >= 8);

console.log(filteredList); 
