---

# 🚀 ClaimMaster for BetterDiscord

**ClaimMaster** es un plugin de automatización para Discord diseñado para reclamar tickets de soporte de forma instantánea y visual. A diferencia de otros bots, ClaimMaster "lee" la pantalla para detectar botones, lo que lo hace extremadamente robusto frente a las actualizaciones internas de Discord.

---

## ✨ Características Principales

* **Detección Visual:** Escanea el chat en tiempo real buscando botones de interacción.
* **Coincidencia Exacta:** Gracias a su motor de búsqueda por palabras completas, diferencia inteligentemente entre botones como "Claim" y "Unclaim".
* **Anti-Detección:** Incluye un sistema de retraso aleatorio (Random Delay) para simular el comportamiento humano y evitar sanciones.
* **Filtro por Canal:** Puedes restringir el funcionamiento a un ID de canal específico para evitar clics accidentales en otros chats.
* **Panel de Configuración:** Interfaz integrada en BetterDiscord para cambiar palabras clave y tiempos sin tocar el código.

---

## 🛠️ Instalación

1. Asegúrate de tener instalado [BetterDiscord](https://betterdiscord.app/).
2. Descarga el archivo `ClaimMaster.plugin.js`.
3. Abre Discord y ve a **Ajustes de Usuario > Plugins**.
4. Haz clic en el botón **Open Plugins Folder** (Abrir carpeta de plugins).
5. Copia el archivo `ClaimMaster.plugin.js` dentro de esa carpeta.
6. Activa el plugin desde la lista en Discord.

---

## ⚙️ Configuración

Una vez activado, haz clic en el icono del **engranaje** junto al nombre del plugin para abrir el panel de ajustes:

| Ajuste | Descripción |
| --- | --- |
| **Palabras Clave** | Lista de palabras que el plugin buscará en los botones (ej: `reclamar, claim`). |
| **ID del Canal** | (Opcional) Pega aquí el ID del canal donde aparecen los avisos de tickets. |
| **Delay Mín/Máx** | Rango de tiempo en milisegundos que el plugin esperará antes de hacer clic. |

> **Nota:** Para obtener el ID de un canal, activa el **Modo Desarrollador** en Discord (Ajustes > Avanzado), haz clic derecho sobre el canal y selecciona **Copiar ID**.

---

## ⚠️ Advertencia de Seguridad

Este plugin ha sido diseñado con medidas de seguridad como retrasos aleatorios y prevención de doble clic; sin embargo, el uso de automatizaciones en Discord va en contra de sus **Términos de Servicio**.

* Úsalo con moderación.
* No pongas retrasos (delays) demasiado bajos (menos de 500ms).
* El autor no se hace responsable de posibles sanciones en tu cuenta.

---

## 📝 Registro de Cambios (Changelog)

### v1.0.0

* Implementación de motor de búsqueda visual (MutationObserver).
* Corrección del bug de falsos positivos con la palabra "unclaim".
* Añadido panel de ajustes dinámico.

---
