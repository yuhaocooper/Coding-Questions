var tvRemote = function(word) {
  //mapping
  var row1 = ['a','b','c','d','e','1','2','3'] //0-7
  var row2 = ['f','g','h','i','j','4','5','6'] //8-15
  var row3 = ['k','l','m','n','o','7','8','9'] //16-23
  var row4 = ['p','q','r','s','t','.','@','0'] //24-31
  var row5 = ['u','v','w','x','y','z','_','/'] //32-39
  var rows = [row1,row2,row3,row4,row5]
  var compiled = row1.concat(row2).concat(row3).concat(row4).concat(row5)
  //individual row variable to find the columns based on indexOf
  //compiled to find the row based on indexOf
  
  var count =0
  for (var i = 0; i<word.length; i++){
    var startingrow =  1
    var startingcolumn = 0
    var currentrow = Math.ceil(compiled.indexOf(word[i-1]) /7.99)
    if (currentrow == 0){
      currentrow = 1
    }
    var row = Math.ceil(compiled.indexOf(word[i]) /7.99)
    if (row ==0){
      row =1
    }
    if ( row == 1){
      var column = row1.indexOf(word[i])
    }
    else if ( row == 2){
      var column = row2.indexOf(word[i])
    }
    else if ( row == 3){
      var column = row3.indexOf(word[i])
    }
    else if (row==4){
      var column = row4.indexOf(word[i])
    }
    else if (row==5){
      var column = row5.indexOf(word[i])
    }
    for(var x=0;x<rows.length;x++){
      if(rows[x].indexOf(word[i-1]) > -1){
        var currentcolumn = rows[x].indexOf(word[i-1])
      }
    }
    if (i==0){
      var rowdiff = Math.abs(row - startingrow)
      var columndiff = Math.abs(column - startingcolumn)
    }
    else{
      var rowdiff = Math.abs(row - currentrow)
      var columndiff = Math.abs(column - currentcolumn)
    }
    /*if (columndiff > 3){
      columndiff = Math.abs(8 - columndiff)
    }
    if (rowdiff > 2){
      rowdiff = Math.abs(5 - rowdiff)
    }*/
    count += (rowdiff + columndiff + 1)
  }
  return count
}
