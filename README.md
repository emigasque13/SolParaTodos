# Sol Para Todos

Landing page de la simulación 3D y AR de un campo fotovoltaico (Unity + Blender).
Proyecto de **Emiliano Gasque**, Ingeniería en Tecnologías Digitales, Universidad Marista de Mérida.

**Stack:** Vite + React 18 + TailwindCSS 3 + Framer Motion.

## 1. Correr en local

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (normalmente http://localhost:5173).

## 2. Agregar el APK

Copia tu archivo con este nombre exacto:

```
public/downloads/SolParaTodos.apk
```

> GitHub rechaza archivos de más de 100 MB. Si tu APK pesa más, súbelo como *Release* en GitHub
> y pega su enlace directo en la variable `VITE_APK_URL` (ver paso 5).

## 3. Personalizar contenido (`src/config.js`)

Todo lo editable está en un solo archivo:

| Variable | Qué hace |
| --- | --- |
| `APK_URL`, `APK_FILENAME` | Archivo que se descarga |
| `REPO_URL` | Muestra "Ver el código fuente" en el footer (vacío = oculto) |
| `DEMO_VIDEO_URL` | Reemplaza la ilustración del hero por tu video |
| `REQUISITOS` | Filas de la sección Requisitos (agrega versión de Android, tamaño del APK...) |
| `CONTROLES` | Filas de la sección Controles (vacío = sección oculta) |
| `CAPTURAS` | Capturas de pantalla con pie de foto, en `public/capturas/` (vacío = sección oculta) |
| `ACADEMIC` | Datos del footer |

## 4. Inicializar Git y subir a GitHub

Crea primero un repositorio vacío en https://github.com/new llamado `sol-para-todos` (sin README ni .gitignore). Luego:

```bash
git init
git add .
git commit -m "Landing page de Sol Para Todos"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/sol-para-todos.git
git push -u origin main
```

Con GitHub CLI se puede hacer en un paso: `gh repo create sol-para-todos --public --source=. --push`

## 5. Desplegar en Vercel

**Desde el panel web (recomendado):**

1. Entra a https://vercel.com/new e inicia sesión con GitHub.
2. Elige el repositorio `sol-para-todos` y pulsa **Import**.
3. Vercel detecta Vite solo (Build: `npm run build`, Output: `dist`). Pulsa **Deploy**.

**Desde la terminal:**

```bash
npx vercel          # primer despliegue (vista previa)
npx vercel --prod   # producción
```

Cada `git push` a `main` vuelve a desplegar automáticamente.

**APK grande (opcional):** en GitHub, *Releases → Draft a new release*, adjunta el `.apk` y publícalo.
Luego, en Vercel, *Settings → Environment Variables*: agrega `VITE_APK_URL` con el enlace directo y vuelve a desplegar.

## Estructura

```
src/
  App.jsx                 Orden de las secciones
  config.js               APK, requisitos, controles, capturas y datos académicos
  index.css               Estilos base y botones
  components/
    Navbar.jsx            Header translúcido al hacer scroll
    Hero.jsx              Título, botones e ilustración
    SolarField.jsx        Campo solar SVG (los paneles siguen al sol)
    Features.jsx          Qué puedes hacer
    LodDemo.jsx           Demo interactivo de niveles de detalle
    Install.jsx           Pasos de instalación
    Gallery.jsx           Capturas (opcional)
    Specs.jsx             Requisitos y controles
    FinalCTA.jsx · Footer.jsx · DownloadButton.jsx · Reveal.jsx · Icons.jsx
```
