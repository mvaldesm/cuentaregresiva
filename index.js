// Cuánto falta para que se vaya el BORIS:

const targetDate = new Date("March 11, 2026 00:00:00").getTime();
let x = setInterval(() => {
  let ahora = new Date().getTime();
  let falta = targetDate - ahora;
  let dias = Math.floor(falta / (1000 * 60 * 60 * 24));
  let horas = Math.floor((falta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((falta % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((falta % (1000 * 60)) / 1000);

  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;
}, 1000);
