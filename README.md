# Sol Para Todos

Landing page de la simulación 3D de un campo fotovoltaico para Android (Unity + Blender).
Proyecto de **Emiliano Gasque**, Ingeniería en Tecnologías Digitales, Universidad Marista de Mérida.

**Stack:** Vite + React 18 + TailwindCSS 3 + Framer Motion.

## 1. Correr en local

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (normalmente http://localhost:5173).

## 2. Agregar el APK

El APK ya está en el proyecto. Si lo actualizas, reemplaza este archivo conservando el nombre:

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
| `REPO_URL`, `GUIDE_URL` | Enlaces del footer (créditos) |
| `APP` | Versión, tamaño y requisitos que se muestran en la descarga y los créditos |
| `STATS` | Cifras de la sección «La simulación» |
| `DEMO_VIDEO_URL` | Reemplaza la ilustración del hero por tu video |
| `REQUISITOS`, `CONTROLES` | Filas de la Guía del proyecto |
| `CAPTURAS` | Capturas de pantalla con pie de foto, en `public/capturas/` (vacío = sección oculta) |
| `ACADEMIC` | Datos del footer |

## 4. Inicializar Git y subir a GitHub

Tu remoto actual es `https://github.com/emigasque13/SolParaTodos.git`. Si empiezas de cero, crea un repositorio vacío en https://github.com/new llamado `SolParaTodos` (sin README ni .gitignore). Luego:

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
  config.js               APK, versión, enlaces, cifras, requisitos y controles
  index.css               Estilos base y botones
  components/
    Navbar.jsx            Header translúcido al hacer scroll
    Hero.jsx · SolarField.jsx   Título, botones e ilustración interactiva
    Problem.jsx           El problema
    Features.jsx          ¿Qué es? y qué se puede hacer
    Parts.jsx             Partes del campo (esquema interactivo)
    HowItWorks.jsx        Cómo funciona, en 4 pasos
    Benefits.jsx          En qué ayuda y para quién
    Simulation.jsx · LodDemo.jsx   Explicación de Unity y demo de niveles de detalle
    Install.jsx           Descarga e instalación
    Gallery.jsx           Capturas (opcional)
    Specs.jsx             Guía del proyecto: controles y requisitos
    Footer.jsx            Créditos: proyecto · descarga · enlaces
```
