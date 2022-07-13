function calculaPrecioTotal(precio, porcentajeImpuestos) {
  let gastosEnvio = 10;
  let precioConImpuestos = (1 + porcentajeImpuestos / 100) * precio;
  let precioTotal = precioConImpuestos + gastosEnvio;
  return precioTotal;
}

let precioTotal = calculaPrecioTotal(23.34, 16);
let otroPrecioTotal = calculaPrecioTotal(15.2, 4);
