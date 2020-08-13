function dirReduc(arr){
  var temp = []
  arr.forEach(x => {
    switch(x){
        case "NORTH":
        if (temp.length == 0) {temp.push("NORTH")}
        else if (temp[temp.length-1] == "SOUTH"){temp.pop()}
        else {temp.push("NORTH")}
        break;
        case "SOUTH":
        if (temp.length == 0) {temp.push("SOUTH")}
        else if (temp[temp.length-1] == "NORTH"){temp.pop()}
        else {temp.push("SOUTH")}
        break;
        case "EAST":
        if (temp.length == 0) {temp.push("EAST")}
        else if (temp[temp.length-1] == "WEST"){temp.pop()}
        else {temp.push("EAST")}
        break;
        case "WEST":
        if (temp.length == 0) {temp.push("WEST")}
        else if (temp[temp.length-1] == "EAST"){temp.pop()}
        else {temp.push("WEST")}
        break;
    }
  })
  return temp
}
