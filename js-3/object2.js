var persona = {
  nombre: "Juan",
  edad: 18,
  ciudad: "Bogotá",
  profesion: "Desarrollador de aplicaciones moviles",
  hobbies: ["Leer", "Estudiar", "Jugar videojuegos", "Jugar microfutbol"]
}


function presentacion(persona){
  var string = "";
  for (var objeto in persona) {
    if (persona.hasOwnProperty(objeto)) {
      string += persona[objeto] + ", "
    }
  }
  return string
}
var mensaje = presentacion(persona)

console.log(persona); //{nombre: "Juan",edad: 18,ciudad: "Bogotá",profesion: "Desarrollador de aplicaciones moviles",hobbies: ["Leer", "Estudiar", "Jugar videojuegos", "Jugar microfutbol"]} (LA VARIABLE PERSONA COMO TAL)//
console.log(mensaje); //Juan, 18, Bogotá, Desarrollador de aplicaciones moviles, Leer,Estudiar,Jugar videojuegos,Jugar microfutbol, (FUNCION QUE CREA UN LISTADO DE TODAS LAS PROPIEDADES)//
let claves = Object.keys(persona.hobbies);
for(let i=0; i< claves.length; i++){
  let clave = claves[i];
  console.log(persona.hobbies[clave]); //Leer - Estudiar - Jugar videojuegos - Jugar microfutbol (LISTA DE HOBBIES)//
}
