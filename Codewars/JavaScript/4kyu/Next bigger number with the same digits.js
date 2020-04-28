function nextBigger(n){
 var array = n.toString().split('').map(a => parseInt(a))
 console.log(n)
 for (var x = array.length-1; x>=0; x--){
   if (array[x-1] < array[x] && array[x-1] != undefined){
     var temp = array.slice(x-1)   
     for (var i = 1; i<10;i++){
       var check = temp.indexOf(temp[0]+i)
       if(check > 0){
         var nextlargest = temp.slice(check,check+1)
         var check = temp.indexOf(temp[0]+i)
         break
       }
     }
     temp.splice(check,1)
     var sorted = temp.sort((a,b) => {return (a-b)})
     var startingnumbers = array.splice(0,x-1)
     var final = parseInt(startingnumbers.concat(nextlargest).concat(sorted).toString().replace(/,/g,''))
     return final
   }
 }
  return -1
}
