function add(num1, num2) {
  var num1 = num1.toString().split('')
  var num2 = num2.toString().split('')
  var arr = []
  while(num1.length != 0 && num2.length != 0){
    if (num1[num1.length-1] != undefined && num2[num2.length-1] != undefined) {
      arr.unshift(Number(num1.pop()) + Number(num2.pop()))
    }
    if (num1[num1.length-1] == undefined && num2[num2.length-1] != undefined){
      while (num2[num2.length-1] != undefined){
        arr.unshift(Number(num2.pop()))
      }
    }
    if (num1[num1.length-1] != undefined && num2[num2.length-1] == undefined){
      while (num1[num1.length-1] != undefined){
        arr.unshift(Number(num1.pop()))
      }
    }
  }
  return parseInt(arr.join(''))
}
