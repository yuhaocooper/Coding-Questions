// return the missing number!
function findNumber(array) {
  var arraysum = array.reduce((a,b) => a+b,0)
  var countsum = ((array.length+1)/2)*(1+(array.length+1))
  if (countsum == arraysum) {
    return array.length+1
  }
  else{
    return countsum-arraysum
  }
} 
//check against another array
