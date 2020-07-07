function solution(input, markers) {
  var complete = 0
  var newstr = input
  var startreg = RegExp('['+markers.join('')+']')
  var endreg = RegExp('\n')
  while (complete == 0){
    var start = newstr.match(startreg).index
    if (newstr[start-1] == ' '){
      start = start -1
    }
    var end = newstr.match(endreg).index
    if (end < start){
      end = newstr.length
      var replace = newstr.slice(start,end)
      var newstr = newstr.replace(replace, '')
      return newstr
    }
    else{
      var replace = newstr.slice(start,end)
      var newstr = newstr.replace(replace,'')
    }
  }
};
