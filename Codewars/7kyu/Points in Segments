function segments(m, a) {
  //range = 0-m
  var range = []
  //Put all the points in range array
  for (var i = 0; i<m+1;i++){
    range.push(i)
  }
  for (var x = 0; x<a.length;x++){
    var deletion = []
    var Li = a[x][0]
    var Ri = a[x][1]
    while (Li < Ri){
      deletion.push(Li)
      Li++
    }
    deletion.push(Ri)
    for ( var z = range.length; z >= 0; z--){
      for (var q = deletion.length; q>=0; q--){
        if(deletion[q] == range[z]){
          range.splice(z,1)
        }
      }
    }
  }
  return range
}
