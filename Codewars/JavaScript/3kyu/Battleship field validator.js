function validateBattlefield(field) {
  var straight = field.join()
  var straight = straight.replace(/,/g,'')
  var count4 = 0
  var count3 = 0
  var count2 = 0
  for (var i = 0; i < 100;i++){
    //console.log(straight[i])
    //console.log(straight[0])
    //console.log(straight[10])
    //console.log(straight[20])
    //console.log(straight[30])
    if ( i> 9){
      var x = Math.floor(i/10)
      var y = i%10
      }
    else{
      var x = 0
      var y = i
      }
    if (straight[i] + straight[i+10] + straight[i+20] + straight[i+30] == '1111'){
      field[x][y] = 4
      field[x+1][y] = 4
      field[x+2][y] = 4
      field[x+3][y] = 4
      var straight = field.join()
      var straight = straight.replace(/,/g,'')
      count4++
      if( field[x][y+1] == 1 || field[x+1][y+1] ==1 || field[x+2][y+1] == 1 || field[x+3][y+1] == 1 || field[x+4][y] == 1 || field[x+4][y+1] ==1){
        return false
      }
    }
    else if(straight[i] + straight[i+1] +straight[i+2] + straight[i+3] == '1111') {
      field[x][y] = 4
      field[x][y+1] = 4
      field[x][y+2] = 4
      field[x][y+3] = 4
      var straight = field.join()
      var straight = straight.replace(/,/g,'')
      count4++
      if( field[x+1][y] == 1 || field[x+1][y+1] ==1 || field[x+1][y+2] == 1 || field[x+1][y+3] == 1 || field[x][y+4] == 1 || field[x+1][y+4] ==1){
        return false
      }
    }    
    else if (straight[i] + straight[i+10] + straight [i+20] == '111'){
      field[x][y] = 3
      field[x+1][y] = 3
      field[x+2][y] = 3
      var straight = field.join()
      var straight = straight.replace(/,/g,'')
      count3++
      if( field[x][y+1] == 1 || field[x+1][y+1] ==1 || field[x+2][y+1] == 1|| field[x+3][y] == 1 || field[x+3][y+1] ==1){
        return false
      }
    }
    else if(straight[i] + straight[i+1] +straight[i+2] == '111') {
      field[x][y] = 3
      field[x][y+1] = 3
      field[x][y+2] = 3
      var straight = field.join()
      var straight = straight.replace(/,/g,'')
      count3++
      if( field[x+1][y] == 1 || field[x+1][y+1] ==1 || field[x+1][y+2] == 1 || field[x][y+3] == 1 || field[x+1][y+3] ==1){
        return false
      }
    }  

    else if (straight[i] + straight[i+10] == '11'){
      field[x][y] = 2
      field[x+1][y] = 2
      var straight = field.join()
      var straight = straight.replace(/,/g,'')
      count2++
      if( field[x][y+1] == 1 || field[x+1][y+1] ==1 || field[x+2][y] == 1 || field[x+2][y+1] ==1){
        return false
      }
    }
    else if(straight[i] + straight[i+1] == '11') {
      field[x][y] = 2
      field[x][y+1] = 2
      var straight = field.join()
      var straight = straight.replace(/,/g,'')
      count2++
      if( field[x+1][y] == 1 || field[x+1][y+1] ==1 || field[x][y+2] == 1 || field[x+1][y+2] ==1){
        return false
      }
    }
  }
  console.log(field)
  var sum = field.reduce( (a,b) => a.concat(b), []).reduce( (a,b) => a+b)
  for (var z = 0; z < 9; z++){
    for (var n = 0; n< 10; n++){
      if (z == 0){
        var shipnum = field[z][n]
        if (field[z][n+1] == 0 || field[z][n+1] == shipnum && field[z+1][n+1] == 0 || field[z+1][n+1] == shipnum && field[z+1][n] == 0 || field[z+1][n] == shipnum && shipnum !=0){
        }
        else if (shipnum == 0) {
        }
        else {
          return false
        }
      }
      else{
        var shipnum = field[z][n]
        console.log(shipnum)
        console.log(z)
        console.log(n)
        if ((field[z-1][n] == 0 || field[z-1][n] == shipnum) && (field[z-1][n+1] == 0 || field[z-1][n+1] == shipnum) && (field[z][n+1] == 0 || field[z][n+1] == shipnum) && (field[z+1][n+1] == 0 || field[z+1][n+1] == shipnum) && (field[z+1][n] == 0 || field[z+1][n] == shipnum) && shipnum !=0){
          console.log('hello')
        }     
        else if (shipnum == 0){
          console.log('zero?')
        }
        else{
          console.log('bye')
          return false
        }
      }
    } 
  }
  if ( count4 ==1 && count3 == 2 && count2 == 3 && sum == 50){
    return true 
  }
    //console.log(straight)
}
