const Calculator = function() {
  this.evaluate = string => {
    //use RegEx to split the string
    console.log(string)
    var string = string.replace(/- /g, '- -')
    var arr = string.split(/[+-]\s/)
    // (10 * 2 / 3 + 4 * 2 - 5)
    //idea: every + || - is a split! if '-' we apply negative to that array
    //we multiply || divide each array and .reduce them to find the sum
    for (var x = 0; x < arr.length; x++){
      //code to do the multiplication/divide within each element of the array
      if (arr[x].indexOf('*') == 0 || arr[x].indexOf('/') == 0){
        arr[x] = arr[x]
      }
      else{
        //arr[x] = arr[x].replace(/\//g, '~')
        arr[x] = arr[x].replace(/ /g,'')
        var subarr = arr[x].split(/[*]/)
        for (var y = 0; y < subarr.length; y++){
          if ( subarr[y].indexOf('/') != -1){
            var divarr = subarr[y].split('/')
            var mapdivarr = divarr.map( a => parseInt(a))
            subarr[y] = mapdivarr.reduce((a,b) => a/b)
          }
        }
        arr[x] = subarr.reduce( (a,b) => a*b)
      }
      console.log(arr)
      //arr[x] = arr[x].replace(/ /g,'')
    }
    var final = arr.map( a => parseFloat(a))
    console.log(final)
    return final.reduce((a,b) => a+b)
  }
};
