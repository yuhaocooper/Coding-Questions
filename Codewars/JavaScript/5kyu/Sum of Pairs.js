var sum_pairs=function(ints, s){
  if (ints.length < 2) return undefined; //not enough numbers for pair.
  let intSet = new Set()
  intSet.add(ints[0]);
  for (let i=1; i < ints.length; ++i){
    let needed = s-ints[i];
    if (intSet.has(needed)){//check if we have already seen the number needed to complete the pair.
      return [needed,ints[i]];
    }
    intSet.add(ints[i]);//if not insert the number in set and continue.
  }
  return undefined;//No answer found
}
  /* 2nd version
  var result = []
  var end = ints.length
  for (var i = 0; i<ints.length-1; i++){
    if (i == end){
      break
    }
    var diff = s - ints[i]
    var nextpair = ints.slice(i+1,end).indexOf(diff)
    var intsnextpair = nextpair + i + 1
    if (intsnextpair < end && nextpair != -1){
      result = [ints[i], ints[intsnextpair]]
      end = nextpair + i + 1
    }
  }
  if (result.length == 0) return undefined
  return(result)
  */

  /* 1st version
  function pair(arr, start, end){
    for (var i=start; i<end; i++) {
      console.log(arr)
      var firstvalue = arr[i]
      var diff = s - firstvalue
      var tempend = arr.slice(i+1, end+1).indexOf(diff)
      if (tempend != -1){
        result = [arr[i], arr[tempend + (i+1)]]
        start = i + 1
        if (start < tempend +i){
          return pair(arr,start,tempend+i)
        }
      }
    }
    if (result.length == 0) {return undefined}
    return result
  }
  
  return pair(ints,start,end)
  */
