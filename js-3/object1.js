var pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  estatura: 1.8,
  hobbies: ["programar", "squash", "piano"],
  saluda: function(){
    console.log("Hola me llamo " + this.nombre)
  }
}

console.log(pedro.edad);

let claves = Object.keys(pedro);
for(let i=0; i< claves.length; i++){
  let clave = claves[i];
  console.log(clave + ": " + pedro[clave]);
}

pedro.saluda();
