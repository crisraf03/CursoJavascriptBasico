// metodos recorrido arrays

 let articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
]


let articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo <= 1000
});
// crea un nuevo array con los elementos del array que se paso como parametroy que
// cumplan con la condicion definida.
//crea un nuevo array que tiene dentro los elementos (objetos) del array padre

let nombreArticulos = articulos.maps(function(articulos){
  return articulo.nombre
});
// crea un nuevo array con los resultados de la llamada a la funcion indicada
// aplicados a cada uno de sus elementos
//crea un nuevo array que tiene dentro los nombres unicamente

let encuentraArticulo = articulos.find(function(articulo){
  return articulo.nombre ==="laptop"
});
//retorna el primer elemento de un array que cumplen con la condicion definida en un nuevo array
// regresa un array con los elementos (objetos) que cumplan la condicion

articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
}); //ejecuta la linea de codigo por cada elemento de un array
//imprime los nombres, no los guarda en un array

let articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
}) //some es una validacion de vardadero/ falso. Regresa en este caso el valor true.


//   Metodo Every

/* Este método checa que todos los elementos en el array cumplan con la validación que ponemos, y al final nos regresa un true o un false */

var articulosBaratos = articulos.every(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosBaratos);

//   Metodo Reduce
/* Este método corre una función en cada elemento del array, para comenzar a sumar los costos de cada elemento. */

var costoTotal = articulos.reduce(function(totalActual, articulo){
    return articulo.costo + totalActual;
}, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual

console.log(costoTotal);

//   Metodo Includes
/*Este metodo nos ayuda verificar si un array incluye un elemento dado, retorna true/false*/
var numeros = [1, 2, 3, 4, 5, 6];
var incluyeNumero = numeros.includes(2);

console.log(incluyeNumero);
