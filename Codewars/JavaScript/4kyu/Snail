snail = function(array) {
  var list = []
  var compiled = []
  var indexlist = []
  var length = array.length
  //var order = order.concat(array[0]) //concat prevents the nested array problem
  
  //1st row, then n of each row till n-1, then reverse of nth row, the [0] of each row till n-2, then row of n+2 without n+2[n], then repeat
  //when do you stop? when n-1 = count
  //Above solution sucked. Let's do it by position instead of looping through arrays.
  //let z = 0 (global counter)
  //1st row = (z,i+z) --> (z,i+z<length)
  //middleright = (z+i+1,length-1-z) --> (z+i+1 < length-1, length-1-z) ||
  //bottom = ( length-1-z , length-1-i-z ) --> ( length-1-z , length-1-i-z>=z )
  //leftup = ( length-2-z, z ) --> ( length-2-z > z , z )
  //In one cycle, what are the counters I need for this to work?
  let z = 0 //global counter
  for (var n = 0; n<length;n++){
    var list = list.concat(array[n]) //Single array with all the elements
    }
  if (list == ''){
    return []
  }
  for (z = 0; z<length; z++){
    //toprow
    for (var n =0; n< length; n++){
      if (indexlist.indexOf(n+(z*length)) == -1){
        compiled.push(list[n+(z*length)])
        indexlist.push(n+(z*length))
      }
    } 
    // rightdown
    for (n = 1; n<length+1; n++){
      if (indexlist.indexOf(((length)*n)-1-z) == -1){
          compiled.push(list[((length)*n)-1-z])
          indexlist.push(((length)*n)-1-z)
      }
    }
    //bottom row
    for ( n=1 ; n<length+1; n++){
      if (indexlist.indexOf((length*(length-z))-n) == -1){
        compiled.push(list[(length*(length-z))-n])
        indexlist.push((length*(length-z))-n)
      }
    }
    //leftrow
    for (n = 1; n<length+1; n++){
      if (indexlist.indexOf((length*(length-n))+z) == -1 ){
        compiled.push(list[(length*(length-n))+z])
        indexlist.push((length*(length-n))+z)
      }
    }
  }
  return compiled
}
