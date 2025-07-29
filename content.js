
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
  chrome.storage.local.set({
    reservaDatos: {
      nombre: nombre,
      alojamiento: alojamiento,
      fechas: fechas
    }
  });
  chrome.runtime.sendMessage({ tipo: "datosAirbnb", resumen });
}

window.addEventListener("load", () => {
  setTimeout(extraerDesdeTextoPlano, 2000);
});