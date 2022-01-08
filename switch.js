//manejo de switch
// aqui se validan casos, si todo son falsos se va directo al default,
// el break es para que el codigo pare alli.

let num = 10;
switch (num) {
  case 1:
    console.log("Soy un uno!");
    break;
  case 10:
    console.log("soy un diez!");
    break;
  case 100:
    console.log("soy un cien!");
    break;
  default:
    console.log("Soy un numero distinto de 1, 10 o 100");
}
