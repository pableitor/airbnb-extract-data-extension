/* // OPCIONAL: Autoejecutar funcion anonima al cargar la página sin botón
(function () {
  const delay = 2000; // Por si Airbnb tarda en renderizar

  setTimeout(() => {
    const allSpans = Array.from(document.querySelectorAll("div, span")).filter(el =>
      el.textContent.trim() === "Estancia en curso" || el.textContent.trim() === "Confirmada"
    );

    if (allSpans.length === 0) return;

    const container = allSpans[0].closest("section") || allSpans[0].parentElement;
    const texts = Array.from(container.querySelectorAll("*"))
      .map(el => el.textContent.trim())
      .filter(txt => txt.length > 5);

    const index = texts.findIndex(t => t === "Estancia en curso" || t === "Confirmada");

    const nombreInquilino = texts[index + 2] || "¿?";
    const alojamiento = texts[index + 6] || "¿?";
    const fechas = texts[index + 7] || "¿?";

    const textoFinal = `🏡 Alojamiento: ${alojamiento}\n🧍 Inquilino: ${nombreInquilino}\n📅 Fechas: ${fechas}`;

    navigator.clipboard.writeText(textoFinal).then(() => {
      console.log("✅ Datos copiados al portapapeles:", textoFinal);
    });
      // Enviamos los datos al popup
    chrome.runtime.sendMessage({ tipo: "datosAirbnb", textoFinal });
  }, delay);
})(); */


function extraerDesdeTextoPlano() {
  console.log("[content.js] ⏳ Analizando texto completo...");

  const texto = document.body.innerText;

  // Regex para extraer entre "Estancia en curso" o "Confirmada" y el primer paréntesis (fechas)
  const regex = /(Estancia en curso|Confirmada)\s+([^\n]+)\s+([^\n]+)\s+([^\n(]+ \([^)]+\))/;

  const match = texto.match(regex);

  if (!match) {
    console.warn("❌ No se pudo extraer la info con regex");
    return;
  }

  const nombre = match[2]?.trim();
  const alojamiento = match[3]?.trim();
  const fechas = match[4]?.trim();

  const resumen = `👤 Inquilino: ${nombre}\n🏠 Alojamiento: ${alojamiento}\n📅 Fechas: ${fechas}`;
  navigator.clipboard.writeText(resumen).then(() => {
    console.log("✅ Datos copiados al portapapeles:", resumen);
  });

  chrome.runtime.sendMessage({ tipo: "datosAirbnb", resumen });
}

window.addEventListener("load", () => {
  setTimeout(extraerDesdeTextoPlano, 2000);
});