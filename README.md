# 🚀 ClaimMaster for BetterDiscord

**ClaimMaster** es un plugin hecho por mi persona, hecho especialmente para los staffs que quieren farmear evidencias como locos. Es un plugin bastante completo que basicamente detecta el boton de Claim **(Depende de la palabra que le hayas puesto)** y hace una simulación de que un humano clickea en un tiempo asignado el boton de Claim del ticket.  

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
5. Dirigete al canal del ticket y el plugin lo reclamara automaticamente.

---

## ⚙️ Cómo se usa

Una vez activado, ve a los ajustes del plugin para configurar tu estrategia:

1. **Palabras Clave Exactas:** Escribe las palabras que aparecen en el botón que quieres pulsar (ej. `reclamar, claim, atender`). Sepáralas por comas.
2. **ID del Canal (Opcional):** Si quieres que solo funcione en un canal específico, pega el ID aquí.

3. **Delays:** Ajusta el tiempo de espera mínimo y máximo. Un rango de `1000ms` a `2000ms` es ideal para que parezca natural.
4. **Guardar:** Dale al botón azul.

---

## ⚠️ Advertencia

El uso de scripts de automatización puede ir en contra de los Términos de Servicio de Discord. Úsalo bajo tu propia responsabilidad y evita usar tiempos de respuesta extremadamente bajos (menos de 500ms) para proteger tu cuenta.

---
