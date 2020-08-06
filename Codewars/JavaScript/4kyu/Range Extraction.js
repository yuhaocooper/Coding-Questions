function solution(list){
  var start = list[0]
  var streak = []
  var result = []
  for (var i=1;i<list.length;i++){
    if (list[i] - list[i-1] != 1){
      if (streak.length == 0 ) {
        result.push(list[i-1])
        streak.push(list[i])
        if (i == list.length - 1){
          result.push(list[i])
        }
      }
      else if (streak.length < 3){
        result.push(...streak)
        streak = [list[i]]
        if (i == list.length - 1){
          result.push(list[i])
        }
      }
      else{
        streak = [streak[0]+'-'+streak[streak.length -1]]
        result.push(...streak)
        streak = [list[i]]
        if (i == list.length - 1){
          result.push(list[i])
        }
      }
    }
    else{
      if (i == 1){
        streak.push(list[0])
      }
      streak.push(list[i])
      if(i == list.length -1){
        if (streak.length < 3){
          result.push(...streak)
        }
        else{
          streak = [streak[0]+'-'+streak[streak.length -1]]
          result.push(...streak)
        }
      }
    }
  }
  return result.join(',')
}
