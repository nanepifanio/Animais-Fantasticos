import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais() {
    try {
      const responseAnimais = await fetch("./animaisapi.json");
      const animaisJSON = await responseAnimais.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      if (numerosGrid) {
        animaisJSON.forEach((animal) => {
          const divAnimal = createAnimals(animal);
          numerosGrid.appendChild(divAnimal);
        });
        const animaNumeros = new AnimaNumeros(
          "[data-numero]",
          ".numeros",
          "ativo"
        );
        animaNumeros.init();
      }
    } catch (error) {
      console.log(Error(error));
    }
  }

  fetchAnimais();

  function createAnimals(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3>
                     <span data-numero>${animal.total}</span>`;
    return div;
  }
}
