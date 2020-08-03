function iqTest(numbers){
  var even = numbers.split(' ').filter(int => int %2 == 0)  
  var odd = numbers.split(' ').filter(int => int %2 != 0)
  return even.length == 1 ? numbers.split(' ').indexOf(even[0]) + 1  : numbers.split(' ').indexOf(odd[0]) + 1
}
