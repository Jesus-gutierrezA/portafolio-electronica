# Portafolio de Ingeniería Electrónica

Página web con los proyectos más importantes de mi carrera: foto del resultado final, esquemático, circuito impreso y descripción de cada uno.

**Ver en línea:** https://TU-USUARIO.github.io/portafolio-electronica/

## Estructura

```
index.html            página principal con todos los proyectos
proyecto.html         página de detalle (se llena según ?id=)
data/proyectos.js     textos e imágenes de cada proyecto  ← lo único que editas
assets/               estilos, script y tu hoja de vida en PDF
proyectos/<id>/       imágenes, PDF, gerbers y README de cada proyecto
proyectos/_plantilla/ README modelo para proyectos nuevos
```

## Agregar un proyecto

1. Copia `proyectos/_plantilla` a `proyectos/mi-proyecto` (sin espacios ni tildes).
2. Pon ahí las imágenes: `foto-final.jpg`, `esquematico.png`, `pcb.png`, etc.
3. En `data/proyectos.js` copia un bloque existente, cambia `id: "mi-proyecto"` y los textos.
4. Sube los cambios. GitHub Pages actualiza la web en uno o dos minutos.

Si una imagen falta, la web muestra un recuadro indicando el nombre del archivo esperado.

## Publicar en GitHub Pages

1. Crea un repositorio público llamado `portafolio-electronica` y sube todos los archivos.
2. Ve a **Settings → Pages**, en *Source* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. Guarda y espera a que aparezca la dirección de la página.

## Consejos para las imágenes

- Exporta el esquemático y la PCB desde KiCad, EasyEDA o Proteus en PNG (para verlos) y PDF (para descargarlos). El visor 3D de la PCB da una imagen muy vistosa.
- Toma la foto final con buena luz y fondo liso.
- Comprime las fotos (por ejemplo en squoosh.app) a menos de 500 KB cada una.
- Usa nombres de archivo en minúsculas, sin espacios ni tildes.

## Ver la página en tu computador

Abre `index.html` directamente en el navegador; no necesita servidor.
