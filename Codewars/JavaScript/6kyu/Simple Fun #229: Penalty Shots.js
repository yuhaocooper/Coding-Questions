function penaltyShots(shots, score){
  if (shots >= 5 && score[0] == score[1]) return 2
  else if (shots>=5) return 1
  var remainingShots = 5-shots
  var goals1 = score[0]
  var goals2 = score[1]
  var shots1 = remainingShots
  var shots2 = remainingShots
  var count = 0
  if (remainingShots < Math.abs(goals2 - goals1)){
    if (goals2 > goals1 && (goals2-goals1-remainingShots != 1)){
      return (remainingShots - (goals2-goals1) +1)
    }
    else if (goals2 > goals1){
      return 0
    }
    else{
      return (-(goals1 - goals2 - 2))
    }
  }
  
  if (goals2 > goals1){
    while (goals2 - goals1 <= shots1){
      count++
      shots1--
      if (goals2 - goals1 < shots1){
        count++
        goals2++
      }
    }
  }
  else{
    while(goals1 - goals2 <= shots2){
      shots1--
      count++
      goals1++
      if (goals1 - goals2 < shots2){
        shots2--
        count++
      }
    }
  }
  return count
}
