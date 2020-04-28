function replacement(a){
  //change the largest number to 1
  //then sort it in ascending order
  var largest = Math.max(...a)
  var index = a.indexOf(largest)
  if (largest == 1){
    a.splice(index,1,2)
    a.sort(function(a,b){return a-b})
    return a
    }
  else{
    a.splice(index,1,1)
    a.sort(function(a,b){return a-b})
    return a
  }
}
