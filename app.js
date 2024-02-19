//console.log("mensagem de texto!")
/*
var n1 = 10
var n2 = 10

var total = (n1 + n2) * 10
var alt = total / (n1 - 7.2) + (n2 + 7.9) 
var tes = (n1**2) * 2 
var raz = 25**0.2

if ( alt =! total || tes == total) {
    console.log("total: " + total + ", " + alt + ", " + tes)
}

if(total <= 10){
    console.log("O total é menor ou igual a 10")
} else {
    console.log("O total é maior que 10")
}

console.log(raz)
*/



var som = require('./soma.js')
var sub = require('./subtracao.js')
var div = require('./divisao.js')

console.log("Total: " + som(10,10))
console.log("Total sub: " + sub(20,10))
console.log("Total div: " + div(10,10))
console.log("Total mult: " + mult(10,10))
