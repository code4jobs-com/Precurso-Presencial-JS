//Aqui haremos la magia. Primero recogemos el objeto body
let body = document.querySelector("body");

//Después incluimos un elemento <div>
body.innerHTML = `<div id="main"></div>`;

//Ahora seleccionamos ese elemento <div> por su id
let div = document.querySelector("#main");

//ahora pasamos a rellenarlo
for (let i = 0; i < 4; i++) {
  div.innerHTML += `
        <p>Soy el párrafo número ${i}</p>
    `;
}

//Y al finalizar se podrá ver en la web el resultado
