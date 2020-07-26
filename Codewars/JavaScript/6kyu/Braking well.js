function dist(v, mu) {                // suppose reaction time is 1
    var t = 1
    var v = v*1000/3600
    var g = 9.81
    var d1 = (v*v) / (2*mu*g)
    var r1 = v*t
    return d1 + r1
}

function speed(d, mu) {               // suppose reaction time is 1
    var t = 1
    var g = 9.81
    var a = 1
    var b = 2*mu*g
    var c = -2 * d * mu * g
    var s = ( ((-b) + Math.sqrt((b*b) - (4*a*c))) / 2*a) * 3600/1000
    return s
}
