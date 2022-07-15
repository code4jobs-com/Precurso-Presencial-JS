// Definición de la función
function calculaPrecioTotal(precio) {
  let impuestos = 1.16;
  let gastosEnvio = 10;
  var precioTotal = precio * impuestos + gastosEnvio;
  alert(precioTotal);
}

// Llamada a la función
calculaPrecioTotal(23.34);

fetch(
  "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJUXqEkNtPTg0RA50VDAfK_9g&key=AIzaSyAEn1adG_S5bA0BdYQVUYCc2buopm9kN2o"
)
  .then((res) => {
    return res.json();
  })
  .then((resp) => {
    console.log(resp);
  });
