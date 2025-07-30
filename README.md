# Sistema de Documentación Estudiantil

Un sistema web simple y fácil de usar para que los estudiantes accedan y descarguen materiales de clase organizados por asignatura.

## 🚀 Características

- **Interfaz Simple**: Diseñada específicamente para estudiantes
- **Organización por Clases**: Materiales organizados por asignatura
- **Descarga Directa**: Acceso directo a archivos PDF, PPT, DOCX, etc.
- **Responsive**: Funciona en dispositivos móviles y de escritorio
- **Estático**: No requiere base de datos, perfecto para GitHub Pages

## 📁 Estructura del Proyecto

```
bemtorres.github.io/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Layout principal
│   ├── pages/
│   │   ├── index.astro           # Página de inicio
│   │   └── clases/
│   │       ├── index.astro       # Lista de clases
│   │       └── [id].astro        # Página de clase específica
│   └── styles/                   # Estilos CSS
├── public/
│   └── documentos/               # Carpeta para archivos
│       ├── clase-1/
│       ├── clase-2/
│       └── ...
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/bemtorres/bemtorres.github.io.git
   cd bemtorres.github.io
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

4. **Construir para producción**:
   ```bash
   npm run build
   ```

## 📝 Cómo Agregar Nuevas Clases

### 1. Agregar Datos de la Clase

Edita el archivo `src/pages/clases/[id].astro` y agrega una nueva entrada en el array `clases`:

```javascript
{
  id: 'clase-5',
  titulo: 'Nueva Clase',
  descripcion: 'Descripción de la nueva clase',
  fecha: '2024-02-12',
  materiales: [
    {
      nombre: 'Presentación de la Clase',
      tipo: 'ppt',
      tamaño: '3.2 MB',
      url: '/documentos/clase-5/presentacion.pptx'
    }
  ]
}
```

### 2. Actualizar Lista de Clases

Edita `src/pages/clases/index.astro` y agrega la nueva clase al array `clases`.

### 3. Subir Archivos

Coloca los archivos de la clase en la carpeta `public/documentos/clase-5/`.

## 📂 Organización de Archivos

Los documentos deben organizarse de la siguiente manera:

```
public/documentos/
├── clase-1/
│   ├── presentacion-conceptos-basicos.pptx
│   ├── ejercicios-practicos.pdf
│   └── guia-estudio.docx
├── clase-2/
│   ├── teoria-estructuras.pdf
│   └── implementaciones-java.zip
└── ...
```

## 🎨 Personalización

### Colores

Los colores se pueden personalizar editando `tailwind.config.mjs`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',  // Color principal
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

### Tipos de Archivo

Para agregar nuevos tipos de archivo, edita la función `getIconoArchivo` en `[id].astro`:

```javascript
function getIconoArchivo(tipo: string) {
  const iconos: Record<string, string> = {
    pdf: '📄',
    ppt: '📊',
    docx: '📝',
    zip: '📦',
    sql: '🗄️',
    // Agregar nuevos tipos aquí
    xlsx: '📊',
    txt: '📄'
  };
  return iconos[tipo] || '📄';
}
```

## 🚀 Despliegue en GitHub Pages

1. **Habilitar GitHub Pages** en la configuración del repositorio
2. **Configurar la fuente** como "GitHub Actions"
3. **Crear workflow** (se crea automáticamente con Astro)

El sitio estará disponible en: `https://bemtorres.github.io/bemtorres.github.io`

## 📱 Características Técnicas

- **Framework**: Astro
- **Estilos**: Tailwind CSS
- **Lenguaje**: TypeScript
- **Hosting**: GitHub Pages
- **Rendimiento**: Sitio estático optimizado

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Si tienes preguntas o necesitas ayuda, contacta al profesor o crea un issue en el repositorio. 