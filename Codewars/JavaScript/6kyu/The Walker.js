function solve(a, b, c, alpha, beta, gamma) {
    var arr = []
    var pi = 3.14159265358979323846
    var x = Math.abs((Math.cos(alpha * pi /180) * a) - (Math.sin(beta * pi /180) * b) - (Math.cos(gamma * pi /180) * c))
    var y = Math.abs((Math.sin(alpha * pi /180) * a) + (Math.cos(beta * pi /180) * b) - (Math.sin(gamma * pi /180) * c))
    var CO = Math.round(Math.sqrt( (x*x) + (y*y) ))
    var angle = 180 - Math.atan(y/x) * 180 / pi
    var truncangle = Math.floor(180 - Math.atan(y/x) * 180 / pi)
    var minutes = (angle - truncangle )*60
    var seconds = (minutes - Math.floor(minutes)) * 60
    arr.push(CO,truncangle, Math.floor(minutes), Math.floor(seconds))
    return (arr)
}
