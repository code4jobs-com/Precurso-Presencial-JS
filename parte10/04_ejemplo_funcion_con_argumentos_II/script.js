// Definición de la función
function calculaPrecioTotal(precio) {
  let impuestos = 1.16;
  let gastosEnvio = 10;
  var precioTotal = precio * impuestos + gastosEnvio;
  alert(precioTotal);
}

// Llamada a la función
calculaPrecioTotal(23.34);
