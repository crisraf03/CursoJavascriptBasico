//objetos

//sintaxis
let miAuto =
{
  marca : "Toyota",
  modelo: "Corolla",
  annio : 2020,
  detalleDelAuto: function ()
  {
      console.log(`Auto ${this.modelo} ${this.annio}`);
  }
};
//acceder a una propiedad especifica
miAuto.marca;
miAuto.detalleDelAuto();
//this es referencia al propio objeto es decir this = miAuto
//Para generar distintos objetos de forma automatica usamos la funcion constructor
function auto(marca, modelo, annio)
{
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let autoNuevo = new auto("Tesla", "Model 3", 2020);
let autoNuevo2 = new auto("Tesla", "Model x", 2018);
let autoNuevo3 = new auto("Toyota", "Corolla", 2020);}}




//reto 3
function auto(marca, modelo, annio)
{
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

function auto(marca, modelo, annio)
{
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


let marcas = ["Tesla", "Toyota"];
let modelos = ["Model 3", "Model x", "Model y"];
let annios = [2020, 2018 , 2016, 2014, 2012,2010];


function rellenarInventario(marcas, modelos,annios)
{
  let inventario = [];
  for (var i = 0; i < marcas.length; i++)
  {
    let mar = marcas[i];
    for (var j = 0; j < modelos.length; j++)
    {
      let mod = modelos[j];
      for (var k = 0; k < annios.length; k++)
      {
        let an = annios[k];
        inventario.push(new auto(mar,mod,an));
      }
    }
  }
  console.log(inventario);
}

let inv = rellenarInventario(marcas, modelos,annios );


//codigo compañero plazti


var brands = ['Toyota', 'Mazda', 'Renault']
var cars = []

function Car(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
}

for (var i = 0; i < 30; i++)
    cars.push(new Car(brands[Math.floor(i/10)], `Serie ${i % 10}`, 1999 + i % 10))

console.log(cars)
