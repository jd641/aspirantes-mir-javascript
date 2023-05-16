var receta = {
}

receta.nombre = "Sandwich"
receta.ingredientes = [
  {nombre: "Pan", cantidad: 2},
  {nombre: "Queso", cantidad: 1}
]
  let seleccionador = 0;
  let producto = receta.ingredientes[seleccionador];
  let cantidad_de_productos = 2;
  let cantidad_total = 0;
  for (var i = 0; i < cantidad_de_productos; i++) {
    let producto_total = receta.ingredientes[i];
    cantidad_total += producto_total.cantidad;
  }

  console.log("Primer producto: " + producto.nombre)
  console.log("Cantidad total de elementos: " + cantidad_total);
