function parseBankAccount(bankAccount) {
  var array = bankAccount.split("\n")
  var answer = []
  for (var i=0; i < array[0].length ; i+=3) {
      var a = array[0].slice(i,i+3)
      var b = array[1].slice(i,i+3)
      var c = array[2].slice(i,i+3)
      //function to determine the number at each i
      function numbercheck(a,b,c){
        //1
        if (a == '   ' && b == '  |'){
          var number = 1
          answer.push(number)
        }
        //4
        else if (a == '   ' && b == '|_|'){
          var number = 4
          answer.push(number)
        }
        //2
        else if (b == ' _|' && c == '|_ '){
          var number = 2
          answer.push(number)
        }
        //3
        else if (b == ' _|' && c == ' _|'){
          var number = 3
          answer.push(number)
        }
        //0
        else if (b == '| |'){
          var number = 0
          answer.push(number)
        }
        else if (b == '|_ ' && c == ' _|'){
          var number = 5
          answer.push(number)
        }
        else if (b == '|_ ' && c == '|_|'){
          var number = 6
          answer.push(number)
        }
        else if (b == '  |' && c == '  |'){
          var number = 7
          answer.push(number)
        }
        else if (b == '|_|' && c == '|_|'){
          var number = 8
          answer.push(number)
        }
        else {
          var number = 9
          answer.push(number)
        }
      }
    numbercheck(a,b,c)
  }
  var answer = answer.join('')
  var answer = parseInt(answer)
  return answer
}
  //determining the number at each position
  //1 or 4
  //function numbercheck(a,b,c){
    //row a,b,c = row 1,2,3
