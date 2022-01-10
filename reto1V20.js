class jugador
{
  constructor(nombre, mano)
  {
    this.nombre = nombre;
    this.mano = mano;
    this.ganadas = 0;
    this.perdidas = 0;
    this.piedras = 0;
    this.papeles = 0;
    this.tijeras = 0;
  }
}


/* si existe un nombre igual, que cambie de mano*/

function ganador(j)
{
  console.log(`Ganó ${j.nombre} con ${j.mano}` );
  j.ganadas ++;
}
function perdedor(j)
{
  console.log(`Perdió ${j.nombre} con ${j.mano}` );
  j.perdidas ++;
}
function contadorManosJugadas(j)
{
  switch (j.mano)
  {
    case "piedra":
      j.piedras++;
      break;
    case "papel":
      j.papeles ++;
      break;
    case "tijeras":
      j.tijeras ++;
      break;

    default:
      console.log(`revisar que mano esta jugando el jugador ${j.nombre}`);
  }
}


function resultado(jganador, jperdedor)
{
  contadorManosJugadas(jganador);
  contadorManosJugadas(jperdedor);
  ganador(jganador);
  perdedor(jperdedor);
}

function partida(j1,j2)
{
  let mano1 = manos.indexOf(j1.mano);
  let mano2 = manos.indexOf(j2.mano);

  let r = mano2 - mano1;

  if (r > 0)
  {
    if(mano1==0 && mano2 == manos.length)
    {
      resultado(j2,j1);
    }
    else
    {
      resultado(j1,j2);
    }

  }

  else if (r < 0)
  {
    if(mano2==0 && mano1 == manos.length)
    {
      resultado(j1,j2);
    }
    else
    {
      resultado(j2,j1);
    }
  }

  else if (r == 0)
  {
    console.log(`Ninguno gana, ambos tienen ${j1.mano}`);
  }
  else
  {
    console.log("Revisa las reglas del juego, verifica que los jugadores tengan piedra, papel o tijeras");
  }

}


function cambiarMano(j, manoNueva)
{
  j.mano = manoNueva;
}

let tabla = [[], []];
let manos = ["piedra", "papel", "tijeras"];


let juan = new jugador("juan", "piedra");
let pedro = new jugador("pedro", "tijeras");
let luisa = new jugador("luisa", "tijeras");
let carolina = new jugador("carolina", "papel");

partida(juan, pedro);

//el proyecto puede seguir creciendo, hacerlo en una pagina web.


/* quede opcion de ingresar su nombre para crear un nuevo jugador en html
que si un nuevo jugador tiene un mismo nombre de un mensaje de un mensaje de
alerta y diga "ya hay un jugador con tu nombre,
desear restear o crear uno nuevo ? */

// que exita la opcion de cambiar de mano? LISTO
