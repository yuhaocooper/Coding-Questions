var theLift = function(queues, capacity) {
  var result = []
  //function to find the next level to stop at
  //Once stop, add to result column
  //function to edit the order depending on the people and the queues
  function up(queues,capacity,result){
    var queue = []
    for (var i = 0; i<queues.length;i++){
      if (queues[i].length != 0 || (queue.indexOf(i) != -1 && queue.length != 0) ){
        result.push(i)
        var temp = queue.slice()
        for (var x = 0; x< queue.length;x++){
          if (queue[x] == i){
            temp.shift()
          }
        }
        queue = temp.slice()
        //Rule for boarding the lift
        queues[i].forEach( num => {
          if (queue.length <= capacity && num > i){
            queue.push(num)
          }
        })
        queue.sort((a,b) => a-b)
      }
    }
  }
  up (queues,capacity,result)
  console.log(result)
  function down(queues, capacity){
    
  }
  
}
