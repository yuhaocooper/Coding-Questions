function fib(n) {
    if (n == 0||n == 1) {
      return BigInt(n);
    } else if (n >= 2 && n % 2 == 0) {
      let k = n / 2;
      let fk = fib(k);
      return (2n * fib(k-1) + fk) * fk;
    } else if (n >= 2) {
      let k = (n + 1) / 2;
      let fk1 = fib(k - 1);
      let fk2 = fib(k);
      return fk2*fk2 + fk1*fk1;
    } else {
      a = 0n;
      b = 1n;
      for (let i = 0; i > n; i--) {
        [a, b] = [b - a, a];
      }
      return a;
    }
}

/*function fib(n) {
  var a = 1n, b =0n, temp;
  if(n>=0){
    while (n >= 1){
      temp = a;
      a = a + b;
      b = temp;
      n--;
    }
  }
  else{
    while (n <= -1){
      temp = a;
      a = b - a;
      b = temp;
      n++;
    }
  } 
  return b;
} */
