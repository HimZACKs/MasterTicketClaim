---

# 🚀 ClaimMaster for BetterDiscord

**ClaimMaster** es un plugin de automatización de alto rendimiento diseñado para reclamar tickets de soporte de forma instantánea. A diferencia de los métodos tradicionales que fallan con las actualizaciones de Discord, ClaimMaster utiliza **detección visual de elementos**, lo que lo hace prácticamente inmune a los cambios de código interno de la plataforma.

---

## ✨ Características

* **Detección por DOM:** Escanea el chat en tiempo real buscando botones activos.
* **Filtro de Palabra Exacta:** Olvida los falsos positivos. Si configuras "claim", el plugin ignorará automáticamente botones como "unclaim".
* **Simulación Humana:** Sistema de retraso (delay) aleatorio para evitar sospechas y errores de "Too Many Requests".
* **Filtro por Canal:** Puedes fijar un ID de canal específico para que el plugin solo trabaje donde tú quieras.
* **Panel de Ajustes:** Interfaz nativa para configurar todo sin tocar una sola línea de código.

---

## 🛠️ Instalación

1. Asegúrate de tener instalado [BetterDiscord](https://betterdiscord.app/).
2. Crea un archivo llamado `ClaimMaster.plugin.js` en tu carpeta de plugins.
3. Pega el código del plugin dentro del archivo.
4. Activa **ClaimMaster** en los ajustes de Discord > Plugins.

---

## ⚙️ Cómo se usa

Una vez activado, ve a los ajustes del plugin (icono del engranaje) para configurar tu estrategia:

1. **Palabras Clave Exactas:** Escribe las palabras que aparecen en el botón que quieres pulsar (ej. `reclamar, claim, atender`). Sepáralas por comas.
2. **ID del Canal (Opcional):** Si quieres que solo funcione en un canal específico, pega el ID aquí.
* *Tip:* Para obtener el ID, activa el "Modo Desarrollador" en Discord, haz clic derecho al canal y dale a "Copiar ID".


3. **Delays:** Ajusta el tiempo de espera mínimo y máximo. Un rango de `1000ms` a `2000ms` es ideal para que parezca natural.
4. **Guardar:** Dale al botón azul y ¡listo! El plugin empezará a vigilar el chat.

---

## ⚠️ Advertencia

El uso de scripts de automatización puede ir en contra de los Términos de Servicio de Discord. Úsalo bajo tu propia responsabilidad y evita usar tiempos de respuesta extremadamente bajos (menos de 500ms) para proteger tu cuenta.

---
