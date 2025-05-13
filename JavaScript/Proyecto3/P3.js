function actualizarTermometro() {
  const input = document.getElementById("temperatura");
  const barra = document.getElementById("barra");
  const salida = document.getElementById("temperatura-mostrada");

  const temp = parseFloat(input.value);

  if (isNaN(temp)) {
    salida.textContent = "Por favor ingresa una temperatura válida.";
    barra.style.width = "0%";
    barra.style.backgroundColor = "#ccc";
    return;
  }

  const tempMin = -10;
  const tempMax = 50;
  const porcentaje = Math.min(Math.max(((temp - tempMin) / (tempMax - tempMin)) * 100, 0), 100);

  barra.style.width = porcentaje + "%";

  if (temp < 10) {
    barra.style.backgroundColor = "blue";
  } else if (temp >= 10 && temp <= 25) {
    barra.style.backgroundColor = "green";
  } else {
    barra.style.backgroundColor = "red";
  }

  salida.textContent = `Temperatura: ${temp.toFixed(1)} °C`;
}
