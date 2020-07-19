function solve(s){
  var uppcase = 0
  var lwrcase = 0
  for (var i = 0; i<s.length;i++){
    s[i] == s[i].toUpperCase() ? uppcase++ : lwrcase++
  }
  if (uppcase > lwrcase){
    return s.toUpperCase()
  }
  else{
    return s.toLowerCase()
  }
}
