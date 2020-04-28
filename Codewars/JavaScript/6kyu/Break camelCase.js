function solution(string) {
  var positions = []
  var count = 0
  for (var i=0; i<string.length ; i++){
    if(string[i].match(/[A-Z]/) != null){
      positions.push(i+count)
      count++
    }
  }
  if (positions == []){
   return string
  }
  else{
    for (var x = 0; x<positions.length;x++){
      var string = string.substring(0,positions[x]) + ' ' + string.substring(positions[x])
    }
    return string
  } 
}
