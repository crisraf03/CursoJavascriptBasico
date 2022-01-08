//coercion

//implicita
var a = 4 + "7"; //undefined
typeof a ; // "string" concatenacion

var b = 4*"7";
typeof b ; // "number" convierte 7 en numero y resulta 28

//explicita

var c = 20;
var d = c + "";
console.log(d); //undefined

var e = String(a);
var f = e + "";
typeof(f); // string

//funciona igual para los metodos Number() y Bool()
