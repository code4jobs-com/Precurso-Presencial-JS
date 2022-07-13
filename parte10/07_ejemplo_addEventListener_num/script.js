// Selecciono el boton
button = document.querySelector("#btn");

// Le doy la utilidad de que ejecute la función que yo quiero
// cuando suceda el evento "click"
button.addEventListener("click", addOne);

// Esta es la función que va a ejecutarse en el addEventListener
function addOne() {
  //Recojo el elemento que voy a modificar
  p = document.querySelector("#num");

  //Como viene en string, lo parseo a int y le sumo uno.
  //Después, lo añado de nuevo al innerHTML del elemento p
  p.innerHTML = parseInt(p.innerHTML) + 1;
}
