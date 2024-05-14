import sumarCadena from "./sumadorDeCadenas";

const firstChar = document.querySelector("#cadena");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadenaInput = firstChar.value;

  div.innerHTML = "<p>" + sumarCadena(cadenaInput) + "</p>";
});
