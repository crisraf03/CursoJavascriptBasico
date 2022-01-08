//reto 1 V1

//reto piedra papel y tijeras
class jugador
{
  constructor(nombre, mano)
  {
    this.nombre = nombre;
    this.mano = mano;
    this.contador = 0;
  }
}


let juan = new jugador("juan", "piedra");
let pedro = new jugador("pedro", "tijeras");
let luisa = new jugador("luisa", "tijeras");

partida(juan, pedro);

function ganador(j)
{
  console.log(`Ganó ${j.nombre} con ${j.mano}` );
  j.contador ++;
  aggResultado(j);
}

function partida(j1,j2)
{
  let mano1 = j1.mano;
  let mano2 = j2.mano;

  if (mano1 =="piedra" && mano2 =="tijeras"  )
  {ganador(j1);
  }

  else if (mano1 == "piedra" && mano2 == "papel")
  {ganador(j2);
  }

  else if (mano1 =="papel" && mano2 =="piedra" )
  {ganador(j1);
  }

  else if (mano1 =="papel" && mano2 =="tijeras" )
  {ganador(j2);
  }

  else if (mano1 =="tijeras" && mano2 =="papel" )
  { ganador(j1);
  }

  else if (mano1 =="tijeras" && mano2 =="piedra" )
  { ganador(j2);
  }

  else if(mano1 === mano2)
  { console.log(`Nadie gana, ambos tienen ${mano1}`);
  }

  else{ console.log("revisa que los jugadores si tengan en la mano: piedra, papel o tijeras");}
}


//notas : añadir un contador de resultados para cada jugador y mostrar historial en una tabla
function aggResultado(jugador)
  {
  let tabla = [[], []];
  let largo = tabla[0].length;
  for (let i = 0; i <= largo; i++)
    {
      if (tabla[0][i] == jugador.nombre || tabla[0][i] == undefined)
      {
        tabla[0][i] = jugador.nombre;
        tabla[1][i] = jugador.contador;
      }
      else
      {
        tabla[0][largo] = jugador.nombre;
        tabla[1][largo] = jugador.contador;
      }
    }
    console.log(tabla);
    }
