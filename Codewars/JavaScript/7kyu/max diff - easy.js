function maxDiff(list) {
  if (list.length > 0){
    return Math.max(...list) - Math.min(...list)
  }
  else{
    return 0
  }
};
