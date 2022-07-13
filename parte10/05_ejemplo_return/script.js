function calculaPrecioTotal(precio) {
  let impuestos = 1.16;
  let gastosEnvio = 10;
  let precioTotal = precio * impuestos + gastosEnvio;
  return precioTotal;
}

let precioTotal = calculaPrecioTotal(23.34);
