function hydrate(s) {
  var r = /\d+/g
  var number = s.match(r).map(x => parseInt(x))
  var sum = number.reduce(function(a,b){
    return a+b;
  });
  if (sum == 1){
    return '1 glass of water'
  }
  else{
    return sum + ' glasses of water'
  }
}
