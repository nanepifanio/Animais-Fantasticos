export default class Funcionamento {
  constructor(funcionamento, colorStatus) {
    this.funcionamento = document.querySelector(funcionamento);
    this.colorStatus = colorStatus;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horariosSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAtuais() {
    const dataAgora = new Date();
    this.diaSemana = dataAgora.getDay();
    this.horarioAgora = dataAgora.getUTCHours() - 3;
  }

  checaDados() {
    this.semanaAberto = this.diasSemana.some((dia) => dia === this.diaSemana);
    this.horarioAberto =
      this.horarioAgora >= this.horariosSemana[0] &&
      this.horarioAgora < this.horariosSemana[1];
    return this.semanaAberto && this.horarioAberto;
  }

  fechadoOuAberto() {
    if (this.checaDados()) {
      this.funcionamento.classList.add(this.colorStatus);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAtuais();
      this.fechadoOuAberto();
    }
    return this;
  }
}
