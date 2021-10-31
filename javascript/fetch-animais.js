import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  function createAnimals(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3>
                     <span data-numero>${animal.total}</span>`;
    return div;
  }

  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animais) {
    animais.forEach((animal) => {
      const divAnimal = createAnimals(animal);
      numerosGrid.appendChild(divAnimal);
    });
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const responseAnimais = await fetch(url);
      const animaisJSON = await responseAnimais.json();
      if (numerosGrid) {
        preencherAnimais(animaisJSON);
        animaAnimaisNumeros();
      }
    } catch (error) {
      console.log(Error(error));
    }
  }

  return criarAnimais();
}
