// Rewrite the function nonMutatingSpliceby using sliceinstead of splice. 
// It should limit the provided citiesarray to a length of 3, and return a 
// new array with only the first three items. Do not mutate the original array provided to the function.


function nonMutatingSplice(cities) {
  
  return cities.slice(0, 3); 
  
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
