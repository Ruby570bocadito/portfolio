# 📘 Guía para actualizar tu portfolio

Todo lo que necesitas para mantener tu web tú mismo, sin ser experto.
La web está publicada en 👉 **https://ruby570bocadito.github.io/portfolio/**

---

## 🔁 El ciclo de trabajo (siempre igual)

1. **Editas** el contenido (normalmente el archivo `src/content.ts`).
2. **Pruebas** en tu ordenador con `npm run dev` → abres http://localhost:3003
3. **Publicas** con `.\publicar.ps1` (o los 3 comandos de git).
4. En **1-2 minutos** los cambios aparecen solos en tu web online.

> ⚠️ Nunca hace falta tocar GitHub a mano. Con hacer `push`, la web se reconstruye y se publica sola (está automatizado con GitHub Actions).

---

## 🛠️ Preparación (solo la primera vez)

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
cd C:\Users\Rby\Desktop\Portfolio\rafael-portfolio-v4
npm install
```

Esto instala las herramientas. Solo se hace una vez (o si cambias de ordenador).

---

## 👀 Ver la web en tu ordenador antes de publicar

```powershell
npm run dev
```
Abre **http://localhost:3003** en el navegador. Mientras esté corriendo, cada cambio que guardes se ve al instante. Para parar: `Ctrl + C`.

**Acostúmbrate a probar siempre en local antes de publicar.**

---

## ✏️ Cómo hacer los cambios más comunes

Casi todo se edita en **`src/content.ts`**. Ábrelo con el Bloc de notas, VS Code, o cualquier editor.

### ➕ Añadir un proyecto nuevo
Busca la lista `projects = [` y copia un bloque existente. Pégalo y cambia los datos:

```ts
  {
    name: "Nombre-del-repo",
    stack: "Python · Go",              // tecnologías, separadas por ·
    category: "tooling",               // "c2" | "ai" | "tooling"  (elige una)
    url: "https://github.com/Ruby570bocadito/Nombre-del-repo",
    star: true,                        // opcional: pon una estrella. Bórralo si no quieres.
    desc: {
      es: "Descripción en español.",
      en: "Description in English.",
    },
  },
```
> Las categorías controlan en qué grupo sale: `c2` = Infraestructura C2, `ai` = IA, `tooling` = Tooling ofensivo.

### ✂️ Quitar un proyecto
Borra su bloque entero (desde `{` hasta `},` incluidos).

### 📝 Cambiar textos (perfil, hero, contacto...)
Baja hasta `export const t = {`. Ahí están todos los textos en `es:` y `en:`.
Por ejemplo, para cambiar tu bio, edita la línea `"about.body": "..."` (¡en las dos versiones, es e en!).

### 🎓 Añadir una certificación
Busca `export const certs = [` y añade una línea:
```ts
  { name: "Nombre del curso", org: "Plataforma" },
```
Para destacarla en rojo, añade `, featured: true`.

### 🧰 Añadir/quitar una skill
Busca `export const skills = [`. Cada grupo tiene una lista `items: [...]`. Añade o quita palabras entre comillas, separadas por comas.

### 🔗 Cambiar enlaces (LinkedIn, email, CV)
Al principio del archivo, en `export const social = {`. Cambia el enlace de LinkedIn por tu slug real.

### 📄 Cambiar el CV descargable
Sustituye el archivo `public/cv.pdf` por tu CV nuevo (mismo nombre). Ya está enlazado en el botón "descargar CV".

### 🧑‍🚀 Poner tu avatar 3D
Pon tu archivo `avatar.glb` en la carpeta `public/`. La escena sustituye el globo por tu modelo automáticamente.

---

## 🚀 Publicar los cambios

**Opción fácil (recomendada):**
```powershell
.\publicar.ps1
```
Te pedirá un mensaje describiendo el cambio (o pon cualquier cosa) y lo sube todo.

**Opción manual (los 3 comandos de siempre):**
```powershell
git add -A
git commit -m "Describe aquí el cambio"
git push
```

Después, en 1-2 min, mira tu web: **https://ruby570bocadito.github.io/portfolio/**
(refresca con `Ctrl + F5` si no ves el cambio al momento).

Para ver si el despliegue fue bien: https://github.com/Ruby570bocadito/portfolio/actions (✓ verde = publicado).

---

## 🆘 Si algo falla

| Problema | Solución |
| --- | --- |
| `npm run dev` da error | Ejecuta `npm install` otra vez. |
| La web local muestra página en blanco | Suele ser una coma o comilla mal en `content.ts`. Revisa el último cambio. |
| `git push` pide login | Ejecuta `gh auth login` (login por navegador). Nunca pegues tokens en sitios raros. |
| El cambio no aparece online | Espera 2 min y refresca con `Ctrl + F5`. Comprueba Actions en verde. |
| Rompiste algo y quieres volver atrás | `git restore src/content.ts` deshace los cambios sin publicar de ese archivo. |

---

## 🎨 ¿Quieres cambiar diseño (colores, animaciones, 3D)?

Eso ya es "código de verdad":
- **Colores y estilos:** `src/style.css` (arriba, en `:root`, están los colores principales).
- **Escena 3D:** `src/scene.ts`.
- **Estructura/secciones:** `src/main.ts`.

Si quieres tocar esto, mejor pídeme ayuda y lo hacemos juntos para no romper nada.

---

_Mantén esta guía en la carpeta del proyecto. Cualquier duda, aquí está el ciclo: **editar → `npm run dev` → `.\publicar.ps1`**._
