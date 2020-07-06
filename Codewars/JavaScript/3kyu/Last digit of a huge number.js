function lastDigit(as){
  let LD = as =>
  as.reduceRight((acc, val) =>
    Math.pow(val < 20 ? val : (val % 20 + 20), acc < 4 ? acc : (acc % 4 + 4)) 
  , 1) % 10
  return(LD(as))
}
