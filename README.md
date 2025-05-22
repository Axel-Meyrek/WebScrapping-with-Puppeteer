# 🕷️ Web Scraping con Puppeteer - Proyecto de Aprendizaje

Este repositorio contiene ejemplos básicos para aprender **web scraping** con [Puppeteer](https://pptr.dev/), una librería de Node.js que permite controlar un navegador Chrome/Chromium de forma programática.

## 📦 Requisitos

- Node.js (v14 o superior)
- npm

Instalación de dependencias:

```bash
npm install puppeteer
```

---

## 📁 Estructura del Proyecto

El código se encuentra en un único archivo que incluye tres funciones principales:

### 1. `capturaDePantalla()`

Abre el sitio web [leivaentradas.com](https://leivaentradas.com), espera unos segundos (gracias a `slowMo`), y toma una captura de pantalla del sitio.

📸 **Uso típico:** Pruebas visuales o monitoreo del estado de una página web.

```javascript
await page.goto('https://leivaentradas.com');
await page.screenshot({ path: 'example.png' });
```

---

### 2. `clickPage()`

Navega a [quotes.toscrape.com](https://quotes.toscrape.com), simula un clic en el enlace de inicio de sesión, y toma una captura de pantalla del resultado.

🧪 **Uso típico:** Automatizar interacciones simples con la página (como hacer clic en botones o enlaces).

```javascript
await page.click('a[href="/login"');
```

---

### 3. `recuperarInformacion()`

Accede nuevamente a [leivaentradas.com](https://leivaentradas.com), y extrae el texto de uno de los botones del sitio para verificar si los boletos están disponibles.

📊 **Uso típico:** Extraer datos de páginas web dinámicas.

```javascript
const buttons = document.querySelectorAll('.btn');
return buttons[63].textContent;
```

💡 *Este método podría requerir ajustes si la estructura del sitio cambia.*

---

## 🚀 Ejecución

Puedes ejecutar cualquiera de las funciones descomentando su línea correspondiente en la sección final del archivo:

```javascript
//capturaDePantalla()
//clickPage();
//recuperarInformacion();
```

Ejecuta el script con:

```bash
node index.js
```

> Asegúrate de tener habilitado ESModules si estás usando `import`.

---

## 🧠 Aprendizajes

Este proyecto te ayudará a entender conceptos clave como:

- Lanzamiento de un navegador sin cabeza (headless)
- Navegación entre páginas
- Captura de pantallas
- Simulación de clics
- Extracción de información del DOM con `page.evaluate()`

---

## 🛠️ Notas Técnicas

- `headless: false` abre una ventana del navegador para ver lo que ocurre.
- `slowMo` ralentiza cada acción para que sea visible durante la ejecución.
- La librería Puppeteer descarga Chromium automáticamente en su instalación.

---

## 📌 TODO / Ideas a futuro

- Automatizar login con usuario y contraseña.
- Extraer múltiples datos estructurados en un array.
- Exportar los datos a CSV o JSON.
- Agregar manejo de errores y capturas más robustas.

---

## 📄 Licencia

Este proyecto es solo para fines educativos y personales.

---

## 👨‍💻 Autor

**Meyrek (Axel Meyrek)**  
Explorando el mundo del web scraping y la automatización con JavaScript.