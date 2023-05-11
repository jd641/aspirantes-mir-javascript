
/*PD: Perdón, no encontré la forma de resolverlo sin un ciclo for ¯\_(ツ)_/¯*/

function suma(numero){
var resultado = 0;
  for (var i = 1; i <= numero; i++){
    resultado = resultado + i;
  }
  return resultado
}
console.log(suma(4));
console.log(suma(10));
console.log(suma(15));
