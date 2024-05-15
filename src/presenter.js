import sumarCadena from "./sumadorDeCadenas";

const cadenaEntrada = document.querySelector("#cadena");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadena = cadenaEntrada.value;

  div.innerHTML = "<p>" + sumarCadena(cadena) + "</p>";
});
