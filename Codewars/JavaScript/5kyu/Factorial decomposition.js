function decomp(n) {
  var primes = [2]
  var list = []
  var temp = []
  var result = []
  for (var i = 2; i<n+1;i++){
    //Code on all the even numbers
    if (i % 2 ==0){
      var x = 0;
      var z = i;
      while (z != 1){
        z = z / primes[x]
        if (z % 1 == 0){
          temp.push(primes[x])
        }
        else{
          z = Math.round(z * primes[x])
          x ++
        }
      }
    }
    //if its not a prime, keep diving by 2 till remainder is none-zero, then follow up by the next prime number
    //odd numbers
    else{
      var x = 0
      var z = i
      while (z != 1){
        z = z / primes[x]
        if (z % 1 == 0){
          temp.push(primes[x])
        }
        else{
          z = Math.round(z * primes[x])
          x ++
          if (x > primes.length - 1){
            primes.push(z)
          }
        }
      }
    }
  }
  //filter the count of number to store as string and push to result arr
  for (var i = 0; i<primes.length; i++){
    var count = temp.filter( num => num == primes[i]).length
    if (count > 1){
      result.push(primes[i] + '^' + count)
    }
    else{
      result.push(primes[i])
    }
  }
  return result.join(' * ')
}
