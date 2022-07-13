// Selecciono el boton
button = document.querySelector("#btn");

// declaro una función anónima en el segundo parámetro del addEventListener
// y llamo a mi función addThree(3) dentro de ella
button.addEventListener("click", function () {
  addThree(3);
});

// Esta es la función que va a ejecutarse en el addEventListener.
function addThree(number) {
  //Recojo el elemento que voy a modificar
  p = document.querySelector("#num");

  //Como viene en string, lo parseo a int y le sumo la el valor del parámetro.
  //Después, lo añado de nuevo al innerHTML del elemento p
  p.innerHTML = parseInt(p.innerHTML) + number;
}
