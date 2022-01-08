//manejo de condicionales
if(true){
console.log("hola");
}
//hola

if(false){
  console.log("hola");
}
//undefined

if(true){
  console.log("verdad");
}
else {
  console.log("soy falso");
}

//si tenemos varios valores antes que llegue al else

if(true){
  console.log("verdad");
}

else if{
  console.log("condicion numero 2");
}
else {
  console.log("soy falso");
}


//ejemplo votacion por edad

var edad = 18;

if (18 < edad < 21) {
  console.log("¿Primera vez ? .buena suerte, no escojas a un uribista");
}
else if (edad > 22) {
  console.log("veo que vuelves a votar, excelente! No escojas a un uribista");
}
else {
  console.log("espera a ser mayor de edad. No votes por un uribista");
}

//operador ternario

//condition ? true : false ; // sintaxtis
var letra = "r";
var resultado = letra === "r"  "soy una r" : "no soy una r";

//resultado : si la letra es r se guarda "soy una r" , si no, guarda "no soy una r".
// se guarda el valor en la variable resultado, en ninguno imprime el mensaje, solo guarda el mensaje en memoria.

//si quiero imprimir el mensaje le pondria console.log(); en otra linea
