var theLift = function(queues, capacity) {
  var result = []
  let isEmpty = a => Array.isArray(a) && a.every(isEmpty);
  var queue = []
  //function to find the next level to stop at
  //Once stop, add to result column
  //function to edit the order depending on the people and the queues
  function up(queues,capacity,result,start){
    console.log(queues)
    for (var i = 0; i<queues.length;i++){
      if (queues[i].length != 0 || (queue.indexOf(i) != -1 && queue.length != 0) ){
        if(result[result.length-1] == i || (queues[i].filter(x =>x>i).length == 0 && queues[i].length >0) ) {}
        else {result.push(i)}
        var temp = queue.slice()
        for (var x = 0; x< queue.length;x++){
          if (queue[x] == i){
            temp.shift()
          }
        }
        queue = temp.slice()
        //Rule for boarding the lift
        queues[i].forEach( (num,index,arr) => {
          if (queue.length <= capacity && num > i){
            queue.push(num)
            arr[index] = 'boarded'
          }
        })
        queues[i] = queues[i].filter(x => x!= 'boarded')
        queue.sort((a,b) => a-b)
        start = i
      }
    }
    if(!isEmpty(queues)){down(queues,capacity,start)}
    return result
  }
  function down(queues,capacity,start){
    for (var i = start; i>=0;i--){
      if (queues[i].length != 0 || (queue.indexOf(i) != -1 && queue.length != 0) ){
        if(result[result.length-1] == i || (queues[i].filter(x =>x<i).length == 0 && queues[i].length >0) ) {}
        else {result.push(i)}
        var temp = queue.slice()
        for (var x = 0; x< queue.length;x++){
          if (queue[x] == i){
            temp.pop()
          }
        }
        queue = temp.slice()
        //Rule for boarding the lift
        queues[i].forEach( (num,index,arr) => {
          if (queue.length <= capacity && num < i){
            queue.push(num)
            arr[index] = 'boarded'
          }
        })
        queues[i] = queues[i].filter(x => x!= 'boarded')
        queue.sort((a,b) => a-b)
        start = i
      }
    }
    return result
  }
  up(queues,capacity,result)
  if (result[0] != 0) result.unshift(0)
  if (result[result.length - 1] != 0) result.push(0)
  return result
}
