//loops
//for

let estudiantes = ["maria", "sergio" ,"rosa" ,"daniela"];

function saludarEstudiante(estudiante)
{
    console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiante(estudiantes[i]);
}

for (let estudiante of estudiantes)
{
  saludarEstudiante(estudiante);
}

//uso de while

//forma 1
while (estudiantes.length > 0)
{
    let estudiante = estudiante.shift();
    saludarEstudiante(estudiante);
}

//forma 2
while (let i < estudiantes.length)
{
    i = 0;
    saludarEstudiante(estudiantes[i]);
    i++;
}
