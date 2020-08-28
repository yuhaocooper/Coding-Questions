function martingale(bank, outcomes)
{
  var losscount = 1
  for (var i = 0; i<outcomes.length; i++){
    if (outcomes[i] == 1){
      bank += losscount*100
      losscount = 1
    }
    else{
      bank -= losscount*100
      losscount = losscount*2
    }
  }
  return bank
}
