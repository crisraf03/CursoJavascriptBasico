// FUNCIONES


// 1.1Funciones declarativas
function miFuncion() {
  return 3;
}
miFuncion();

//1.2Funciones de Expresión
var miFuncion = function (a,b) {
  return a+b;
}
miFuncion();

//2.agregar una variable a un string:
function saludarEstudiante(estudiante){
  console.log(`Hola ${estudiante}`);
}

//3. generar un resultado
function sumar(a,b){
  var resultado = a + b;
  return resultado
}
