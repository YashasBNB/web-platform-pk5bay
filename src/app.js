// Progression 1: Create special addition

function specialAddition(x,y){
  var sub=(x<0 | y<0) ?"Negative numbers are not allowed":x-y;
  return sub
}
// Progression 2: Create simple division
function simpleDivision(x,y){
  var div=(x<y)? "Cannot divide a smaller number by a larger number": (y<0)? "Negative numbers are not allowed": (y==0) ?  "Not a number": x/y;
  
  return div;

}

// Progression 3: Create the special calculator
function specialCalculator(x,y,operation){
  var div=operation(x,y);
  return div;
}