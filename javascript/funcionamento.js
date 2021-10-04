export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  if (funcionamento) {
    const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
    const horariosSemana = funcionamento.dataset.horario.split(",").map(Number);

    const dataAgora = new Date();
    const diaSemana = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();

    const semanaAberto = diasSemana.some((dia) => dia === diaSemana);

    const horarioAberto =
      horarioAgora >= horariosSemana[0] && horarioAgora < horariosSemana[1];

    if (semanaAberto && horarioAberto) {
      funcionamento.classList.add("aberto");
    }
  }
}
