export default function initFuncionamento() {}

const agora = new Date();
const futuro = new Date("Dec 28 2021");

// function transformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(futuro.getTime());

// console.log(Math.floor(diasFuturo - diasAgora));

function transformarHoras(tempo) {
  return tempo / (60 * 60 * 1000);
}

const horasAgora = transformarHoras(agora.getTime());
const horasFuturo = transformarHoras(futuro.getTime());

console.log(Math.floor(horasFuturo - horasAgora));
