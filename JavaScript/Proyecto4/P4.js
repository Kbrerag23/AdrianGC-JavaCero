let votos = JSON.parse(localStorage.getItem("votos")) || {
  vainilla: 0,
  chocolate: 0,
  fresa: 0
};

function votar(sabor) {
  votos[sabor]++;
  localStorage.setItem("votos", JSON.stringify(votos));
  actualizarResultados();
}

function actualizarResultados() {
  const total = Object.values(votos).reduce((a, b) => a + b, 0);
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "";

  // Detecta el que gana
  let maxVotos = Math.max(...Object.values(votos));
  let ganadores = Object.keys(votos).filter(key => votos[key] === maxVotos);

  for (let sabor in votos) {
    const porcentaje = total > 0 ? ((votos[sabor] / total) * 100).toFixed(1) : 0;
    const div = document.createElement("div");
    div.className = "resultado";
    if (ganadores.includes(sabor) && maxVotos > 0) {
      div.classList.add("ganador");
    }
    div.textContent = `${sabor.charAt(0).toUpperCase() + sabor.slice(1)}: ${votos[sabor]} votos (${porcentaje}%)`;
    resultadosDiv.appendChild(div);
  }
}

function resetearVotos() {
  if (confirm("¿Estás seguro de que quieres reiniciar los votos?")) {
    votos = {
      vainilla: 0,
      chocolate: 0,
      fresa: 0
    };
    localStorage.setItem("votos", JSON.stringify(votos));
    actualizarResultados();
  }
}


// Inicia al cargar
actualizarResultados();
