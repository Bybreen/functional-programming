// Fill in the urlSlugfunction so it converts a string titleand returns the hyphenated version for the URL. 
// You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces

// the global variable
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
return title.split(/\W/).filter((obj)=>{
    return obj !=='';
  }).join('-').toLowerCase();
  
}

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
