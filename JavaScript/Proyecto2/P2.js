let sujetos = ["Mi perro", "El gato", "Un alien", "Mi abuela"];
let acciones = ["se comió", "tiró", "perdió", "quemó"];
let objetos = ["mis deberes", "mi ordenador", "el proyecto", "la tarea"];

function generarExcusa() {
  const sujeto = sujetos[Math.floor(Math.random() * sujetos.length)];
  const accion = acciones[Math.floor(Math.random() * acciones.length)];
  const objeto = objetos[Math.floor(Math.random() * objetos.length)];

  const excusa = `${sujeto} ${accion} ${objeto}`;
  document.getElementById("excusa").textContent = excusa;
}

function agregarPalabra(tipo) {
  let inputId = "";
  let array;

  if (tipo === "sujeto") {
    inputId = "nuevoSujeto";
    array = sujetos;
  } else if (tipo === "accion") {
    inputId = "nuevaAccion";
    array = acciones;
  } else if (tipo === "objeto") {
    inputId = "nuevoObjeto";
    array = objetos;
  }

  const nuevoValor = document.getElementById(inputId).value.trim();
  if (nuevoValor) {
    array.push(nuevoValor);
    alert(`Agregado: "${nuevoValor}" a ${tipo}s`);
    document.getElementById(inputId).value = "";
  } else {
    alert("Por favor, escribe algo válido.");
  }
}
