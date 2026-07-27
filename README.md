# Constructora XYZ - Bono del Estado Peruano

Sitio web institucional para una constructora especializada en viviendas sociales con el Bono del Estado Peruano.

## Estructura

```
CONSTRUCTORA/
├── index.html              # Página principal
├── css/
│   └── estilos.css         # Estilos personalizados
├── js/
│   └── script.js           # Lógica del sitio
└── img/
    ├── logos/              # Logo de la empresa
    ├── equipo/             # Foto del equipo
    ├── proyectos/          # Galería de proyectos
    └── hero-bg.svg         # Imagen principal
```

## Secciones

- **Inicio** - Hero con llamada a la acción y estadísticas
- **Nosotros** - Información de la empresa y certificaciones
- **Servicios** - Asesoría para el Bono, construcción integral, diseño
- **Proyectos** - Galería de viviendas entregadas
- **FAQ** - Preguntas frecuentes sobre el Bono del Estado
- **Contacto** - Formulario + información de contacto + WhatsApp

## Tecnologías

- HTML5
- Tailwind CSS (CDN)
- JavaScript vanilla
- Font Awesome 6 (iconos)
- Google Fonts (Inter)

## Cómo usar

1. Abre `index.html` en tu navegador
2. O usa un servidor local:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js
   npx serve .
   ```

## Personalización

### Reemplazar imágenes placeholder

Las imágenes actuales son placeholders SVG. Para usar fotos reales:

1. Coloca tus fotos en las carpetas correspondientes (`img/`)
2. Actualiza las extensiones en `index.html`:
   - `logo-empresa.svg` → `logo-empresa.png`
   - `hero-bg.svg` → `hero-bg.jpg`
   - `casa1.svg` → `casa1.jpg` (y así con las demás)

### Editar información de contacto

Busca y reemplaza estos valores en `index.html`:

| Dato | Buscar | Reemplazar |
|------|--------|------------|
| Teléfono | `+51 987 654 321` | Tu número |
| WhatsApp | `51987654321` | Tu número (sin +) |
| Email | `info@constructora-xyz.com` | Tu correo |
| Dirección | `Av. Ejemplo 123, Lima, Perú` | Tu dirección |

### Cambiar colores

Los colores principales están definidos con clases de Tailwind:

- `blue-600` / `blue-900` - Color primario
- `yellow-400` - Color de acento
- `gray-50` / `gray-900` - Fondos

## GitHub

Repositorio: https://github.com/jayson-tabpe/EJEMPLO-CONSTRUCTURA

## Licencia

Proyecto privado - Constructora XYZ 2026
