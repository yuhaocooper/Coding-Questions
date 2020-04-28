function findOdd(A) {
  for (var i = 0;i<A.length;i++){
    var res = A.filter(b => b == A[i])
    if (res.length % 2 != 0){
      return A[i]
    }
  }
}
