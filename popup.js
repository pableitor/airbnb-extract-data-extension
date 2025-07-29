/*
// popup.js
document.getElementById("copiarBtn").addEventListener("click", () => {
  //const contenido = document.getElementById("datosExtraidos").innerText;
  const contenido =  navigator.clipboard.readText();

  navigator.clipboard.writeText(contenido)
    .then(() => {
      alert("✅ Copiado al portapapeles");
    })
    .catch(err => {
      console.error("❌ Error al copiar:", err);
      alert("❌ No se pudo copiar");
    });
});
*/
// popup.js
document.getElementById("copiarBtn").addEventListener("click", async () => {
  try {
    const contenido = await navigator.clipboard.readText();  // 👈 Esperamos a que se lea el clipboard
    document.getElementById("datosExtraidos").innerText = contenido; // Mostramos el contenido en el popup

    //await navigator.clipboard.writeText(contenido); // Copiamos de nuevo si quieres, aunque esto sería redundante

    alert("✅ Texto leído del portapapeles");
  } catch (err) {
    console.error("❌ Error al leer el portapapeles:", err);
    alert("❌ No se pudo acceder al portapapeles");
  }
});

