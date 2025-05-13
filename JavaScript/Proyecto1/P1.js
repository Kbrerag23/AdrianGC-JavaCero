function detectarEmocion() {
  const texto = document.getElementById("texto").value.toLowerCase();
  const resultado = document.getElementById("resultado");

  const emociones = {
    "feliz": "😊",
    "contento": "😊",
    "triste": "😢",
    "llorando": "😢",
    "enojado": "😡",
    "molesto": "😡",
    "emocionado": "🤩",
    "entusiasmado": "🤩",
    "asustado": "😨",
    "miedo": "😨"
  };

  let detectadas = [];

  for (const palabra in emociones) {
    if (texto.includes(palabra)) {
      detectadas.push(`${palabra} ${emociones[palabra]}`);
    }
  }

  if (detectadas.length > 0) {
    resultado.textContent = `Detecté: ${detectadas.join(", ")}`;
  } else {
    resultado.textContent = "No detecté ninguna emoción.";
  }
}

