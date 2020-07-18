function thirt(n) {
    var arr = n.toString().split('')
    var x = 0
    var sum = arr.reverse().map((x,i) => {
      if (i > 5){
        i = i +1
        i = i % 6
      }
      else {
        i = i + 1
      }
      switch (i){
          case 1:
          return x * 1
          case 2:
          return x * 10
          case 3:
          return x * 9
          case 4:
          return x * 12
          case 5:
          return x * 3
          case 6:
          return x * 4
      } 
    }).reduce( (sum, x) => sum + x)
    if (sum == n){
      console.log(sum)
      return sum
    }
    else{
      return thirt(sum)
    }
}
