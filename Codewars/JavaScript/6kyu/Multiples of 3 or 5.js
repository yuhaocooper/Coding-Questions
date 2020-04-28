function solution(number){
  var sum = 0
  for (var x = 0; x< number; x++){
    if( x % 5 == 0 && x % 3 == 0){
      sum += x
    }
    else if ( x % 3 == 0){
      sum += x
    }
    else if ( x%5 == 0){
      sum += x
    }
  }
  return sum
}
