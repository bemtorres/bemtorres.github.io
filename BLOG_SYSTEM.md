# Sistema de Blogs - Profebenja

## 📝 Descripción General

El sistema de blogs permite publicar artículos en formato Markdown o HTML, con soporte para múltiples categorías y tags. Está integrado con Astro y utiliza Tailwind CSS para el diseño.

## 🏗️ Estructura del Sistema

### Archivos Principales

- `src/lib/blogs.ts` - Configuración y datos de los blogs
- `src/pages/blog/index.astro` - Página principal del blog
- `src/pages/blog/[id].astro` - Página individual de cada post
- `src/pages/blog/categoria/[id].astro` - Filtrado por categorías
- `src/pages/blog/tag/[tag].astro` - Filtrado por tags
- `src/components/BlogPreview.astro` - Componente para mostrar posts destacados

## 📊 Estructura de Datos

### BlogPost Interface

```typescript
interface BlogPost {
  id: string;                    // ID único del post
  title: string;                 // Título del artículo
  description: string;           // Descripción corta
  content: string;               // Contenido completo (Markdown o HTML)
  excerpt: string;               // Extracto para vista previa
  author: string;                // Autor del artículo
  publishDate: string;           // Fecha de publicación (YYYY-MM-DD)
  lastModified: string;          // Fecha de última modificación
  categories: string[];          // IDs de las categorías
  tags: string[];                // Tags del artículo
  featuredImage?: string;        // URL de la imagen destacada
  readingTime: number;           // Tiempo de lectura en minutos
  status: 'draft' | 'published' | 'archived'; // Estado del post
  format: 'markdown' | 'html';   // Formato del contenido
  seo?: {                        // Metadatos SEO
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}
```

### BlogCategory Interface

```typescript
interface BlogCategory {
  id: string;                    // ID único de la categoría
  name: string;                  // Nombre de la categoría
  description: string;           // Descripción de la categoría
  color: string;                 // Clase CSS de color (Tailwind)
  icon?: string;                 // Emoji o icono
}
```

## 🎯 Categorías Predefinidas

El sistema incluye las siguientes categorías:

1. **Tecnología** 💻 - Artículos sobre programación y desarrollo web
2. **Educación** 📚 - Contenido educativo y recursos para estudiantes
3. **Tutoriales** 🎯 - Guías paso a paso y tutoriales prácticos
4. **Noticias** 📰 - Noticias y actualizaciones del mundo tech
5. **Opinión** 💭 - Artículos de opinión y reflexiones personales

## ✍️ Cómo Crear un Nuevo Post

### 1. Agregar el Post a `src/lib/blogs.ts`

```typescript
{
  id: 'mi-nuevo-post',
  title: 'Título de mi artículo',
  description: 'Descripción corta del artículo',
  content: `
# Mi Título Principal

Este es el contenido de mi artículo en **Markdown**.

## Subtítulo

- Punto 1
- Punto 2
- Punto 3

\`\`\`javascript
// Ejemplo de código
function ejemplo() {
  console.log('Hola mundo');
}
\`\`\`
  `,
  excerpt: 'Extracto del artículo que aparecerá en las vistas previas...',
  author: 'Tu Nombre',
  publishDate: '2024-01-25',
  lastModified: '2024-01-25',
  categories: ['tecnologia', 'tutoriales'], // Puede tener múltiples categorías
  tags: ['javascript', 'web-development', 'tutorial'],
  featuredImage: 'https://ejemplo.com/imagen.jpg',
  readingTime: 5,
  status: 'published', // 'draft', 'published', 'archived'
  format: 'markdown', // 'markdown' o 'html'
  seo: {
    metaTitle: 'Título SEO optimizado',
    metaDescription: 'Descripción SEO del artículo',
    keywords: ['palabra', 'clave', 'seo']
  }
}
```

### 2. Formato del Contenido

#### Markdown
```markdown
# Título Principal

## Subtítulo

Este es un párrafo normal.

- Lista con viñetas
- Otro elemento

1. Lista numerada
2. Segundo elemento

**Texto en negrita** e *texto en cursiva*.

\`\`\`javascript
// Bloque de código
function ejemplo() {
  return 'Hola mundo';
}
\`\`\`

> Cita o blockquote

[Enlace](https://ejemplo.com)
```

#### HTML
```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<p>Este es un párrafo normal.</p>
<ul>
  <li>Lista con viñetas</li>
  <li>Otro elemento</li>
</ul>
<pre><code>// Código aquí</code></pre>
```

## 🔧 Funciones de Utilidad

### Obtener Posts

```typescript
import { 
  getPublishedPosts, 
  getPostsByCategory, 
  getPostsByTag, 
  getPostById,
  searchPosts 
} from '../lib/blogs';

// Todos los posts publicados
const posts = getPublishedPosts();

// Posts por categoría
const techPosts = getPostsByCategory('tecnologia');

// Posts por tag
const jsPosts = getPostsByTag('javascript');

// Post específico
const post = getPostById('mi-post-id');

// Búsqueda
const resultados = searchPosts('react');
```

### Obtener Categorías

```typescript
import { getCategoryById, blogCategories } from '../lib/blogs';

// Todas las categorías
const categorias = blogCategories;

// Categoría específica
const categoria = getCategoryById('tecnologia');
```

## 🎨 Personalización

### Agregar Nuevas Categorías

1. Agregar la categoría en `blogCategories`:

```typescript
{
  id: 'nueva-categoria',
  name: 'Nueva Categoría',
  description: 'Descripción de la nueva categoría',
  color: 'bg-pink-500', // Clase de color de Tailwind
  icon: '🎨'
}
```

### Cambiar Colores

Los colores se definen usando clases de Tailwind CSS:

- `bg-blue-500` - Azul
- `bg-green-500` - Verde
- `bg-purple-500` - Púrpura
- `bg-red-500` - Rojo
- `bg-yellow-500` - Amarillo
- `bg-pink-500` - Rosa
- `bg-indigo-500` - Índigo

### Estilos CSS

Los estilos para el contenido Markdown están definidos en `src/pages/blog/[id].astro`:

```css
.prose h1 { @apply text-3xl font-bold text-gray-900 mb-6 mt-8; }
.prose h2 { @apply text-2xl font-bold text-gray-900 mb-4 mt-6; }
.prose p { @apply text-gray-700 leading-relaxed mb-4; }
/* ... más estilos */
```

## 📱 URLs del Sistema

- `/blog` - Página principal del blog
- `/blog/[id]` - Post individual
- `/blog/categoria/[id]` - Posts por categoría
- `/blog/tag/[tag]` - Posts por tag

## 🔍 SEO y Metadatos

Cada post puede incluir metadatos SEO:

```typescript
seo: {
  metaTitle: 'Título optimizado para SEO',
  metaDescription: 'Descripción que aparecerá en los resultados de búsqueda',
  keywords: ['palabra', 'clave', 'seo']
}
```

## 📊 Estadísticas

El sistema incluye:

- **Tiempo de lectura** - Calculado automáticamente
- **Fecha de publicación y modificación**
- **Autor del artículo**
- **Categorías múltiples**
- **Tags para organización**
- **Imágenes destacadas**

## 🚀 Próximas Mejoras

- [ ] Sistema de comentarios
- [ ] Búsqueda avanzada
- [ ] Paginación
- [ ] RSS feed
- [ ] Integración con redes sociales
- [ ] Sistema de autores múltiples
- [ ] Editor visual para crear posts
- [ ] Sistema de borradores automático

## 📝 Ejemplo Completo

```typescript
{
  id: 'guia-completa-astro',
  title: 'Guía Completa de Astro: De Principiante a Experto',
  description: 'Aprende todo sobre Astro, desde los conceptos básicos hasta técnicas avanzadas',
  content: `
# Guía Completa de Astro

Astro es un framework web moderno que está revolucionando el desarrollo web.

## ¿Qué es Astro?

Astro te permite crear sitios web más rápidos con menos JavaScript.

### Características principales:

- **Rendimiento**: Cero JavaScript por defecto
- **Flexibilidad**: Usa cualquier framework
- **Simplicidad**: Sintaxis familiar

## Instalación

\`\`\`bash
npm create astro@latest
\`\`\`

## Primeros pasos

1. Crea un nuevo proyecto
2. Configura tu editor
3. Comienza a desarrollar

> **Consejo**: Astro es perfecto para sitios web estáticos y dinámicos.

¿Te gustaría aprender más? [Visita la documentación oficial](https://astro.build).
  `,
  excerpt: 'Descubre cómo Astro puede transformar tu forma de desarrollar sitios web modernos y rápidos.',
  author: 'Profebenja',
  publishDate: '2024-01-25',
  lastModified: '2024-01-25',
  categories: ['tecnologia', 'tutoriales'],
  tags: ['astro', 'javascript', 'web-development', 'framework', 'tutorial'],
  featuredImage: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg',
  readingTime: 12,
  status: 'published',
  format: 'markdown',
  seo: {
    metaTitle: 'Guía Completa de Astro: De Principiante a Experto',
    metaDescription: 'Aprende todo sobre Astro, desde los conceptos básicos hasta técnicas avanzadas de desarrollo web.',
    keywords: ['astro', 'javascript', 'web development', 'framework', 'tutorial']
  }
}
```

¡El sistema está listo para usar! 🎉 