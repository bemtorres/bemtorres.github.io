export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  color: string;
  icon?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  excerpt: string;
  author: string;
  publishDate: string;
  lastModified: string;
  categories: string[]; // IDs de las categorías
  tags: string[];
  featuredImage?: string;
  readingTime: number; // en minutos
  status: 'draft' | 'published' | 'archived';
  format: 'markdown' | 'html';
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

// Categorías predefinidas
export const blogCategories: BlogCategory[] = [
  {
    id: 'tecnologia',
    name: 'Tecnología',
    description: 'Artículos sobre programación, desarrollo web y tecnología',
    color: 'bg-blue-500',
    icon: '💻'
  },
  {
    id: 'educacion',
    name: 'Educación',
    description: 'Contenido educativo y recursos para estudiantes',
    color: 'bg-green-500',
    icon: '📚'
  },
  {
    id: 'tutoriales',
    name: 'Tutoriales',
    description: 'Guías paso a paso y tutoriales prácticos',
    color: 'bg-purple-500',
    icon: '🎯'
  },
  {
    id: 'noticias',
    name: 'Noticias',
    description: 'Noticias y actualizaciones del mundo tech',
    color: 'bg-red-500',
    icon: '📰'
  },
  {
    id: 'opinion',
    name: 'Opinión',
    description: 'Artículos de opinión y reflexiones personales',
    color: 'bg-yellow-500',
    icon: '💭'
  }
];

// Ejemplo de posts de blog
export const blogPosts: BlogPost[] = [
  {
    id: 'introduccion-astro',
    title: 'Introducción a Astro: El Framework del Futuro',
    description: 'Descubre por qué Astro está revolucionando el desarrollo web moderno',
    content: `
# Introducción a Astro

Astro es un framework web moderno que te permite crear sitios web más rápidos con menos JavaScript.

## ¿Por qué Astro?

- **Rendimiento**: Cero JavaScript por defecto
- **Flexibilidad**: Usa cualquier framework que prefieras
- **Simplicidad**: Sintaxis familiar y fácil de aprender

## Características principales

1. **Islas**: Carga JavaScript solo cuando es necesario
2. **SSR**: Renderizado del lado del servidor
3. **SSG**: Generación de sitios estáticos

¿Te gustaría aprender más sobre Astro?
    `,
    excerpt: 'Descubre por qué Astro está revolucionando el desarrollo web moderno con su enfoque único en rendimiento y simplicidad.',
    author: 'Profebenja',
    publishDate: '2024-01-15',
    lastModified: '2024-01-15',
    categories: ['tecnologia', 'tutoriales'],
    tags: ['astro', 'javascript', 'web-development', 'framework'],
    featuredImage: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg',
    readingTime: 5,
    status: 'published',
    format: 'markdown',
    seo: {
      metaTitle: 'Introducción a Astro: El Framework del Futuro',
      metaDescription: 'Descubre por qué Astro está revolucionando el desarrollo web moderno con su enfoque único en rendimiento.',
      keywords: ['astro', 'javascript', 'web development', 'framework']
    }
  },
  {
    id: 'mejores-practicas-react',
    title: 'Mejores Prácticas en React 2024',
    description: 'Guía completa de las mejores prácticas para desarrollar aplicaciones React modernas',
    content: `
# Mejores Prácticas en React 2024

React ha evolucionado significativamente en los últimos años. Aquí te presentamos las mejores prácticas actuales.

## 1. Hooks Personalizados

Los hooks personalizados son fundamentales para reutilizar lógica:

\`\`\`javascript
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
\`\`\`

## 2. Componentes Funcionales

Siempre usa componentes funcionales con hooks en lugar de componentes de clase.

## 3. Optimización de Rendimiento

- Usa React.memo para componentes pesados
- Implementa useMemo y useCallback cuando sea necesario
- Considera usar React.lazy para code splitting
    `,
    excerpt: 'Guía completa de las mejores prácticas para desarrollar aplicaciones React modernas y eficientes.',
    author: 'Profebenja',
    publishDate: '2024-01-20',
    lastModified: '2024-01-20',
    categories: ['tecnologia', 'tutoriales'],
    tags: ['react', 'javascript', 'frontend', 'best-practices'],
    featuredImage: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg',
    readingTime: 8,
    status: 'published',
    format: 'markdown',
    seo: {
      metaTitle: 'Mejores Prácticas en React 2024',
      metaDescription: 'Guía completa de las mejores prácticas para desarrollar aplicaciones React modernas.',
      keywords: ['react', 'javascript', 'frontend', 'best practices']
    }
  },
  {
    id: 'ejemplo-html-post',
    title: 'Ejemplo de Post en HTML',
    description: 'Demostración de cómo crear posts usando HTML en lugar de Markdown',
    content: `
<h1>Post en HTML</h1>

<p>Este es un ejemplo de cómo crear contenido usando <strong>HTML puro</strong> en lugar de Markdown.</p>

<h2>Ventajas del HTML</h2>

<ul>
  <li>Control total sobre el markup</li>
  <li>Puedes usar elementos HTML avanzados</li>
  <li>Flexibilidad para estilos personalizados</li>
  <li>Compatibilidad con cualquier estructura HTML</li>
</ul>

<h3>Ejemplo de código</h3>

<pre><code class="language-javascript">
// Este es un ejemplo de código JavaScript
function saludar(nombre) {
  return \`¡Hola, \${nombre}!\`;
}

console.log(saludar('Mundo'));
</code></pre>

<blockquote>
  <p><em>El HTML te da control total sobre la estructura y presentación de tu contenido.</em></p>
</blockquote>

<div style="background: linear-gradient(45deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <h3 style="margin-top: 0;">¡Contenido Personalizado!</h3>
  <p>Puedes usar cualquier estilo CSS inline o clases personalizadas.</p>
</div>
    `,
    excerpt: 'Aprende cómo crear posts usando HTML puro para mayor flexibilidad y control sobre el contenido.',
    author: 'Profebenja',
    publishDate: '2024-01-22',
    lastModified: '2024-01-22',
    categories: ['tutoriales', 'tecnologia'],
    tags: ['html', 'tutorial', 'ejemplo', 'web-development'],
    featuredImage: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg',
    readingTime: 3,
    status: 'published',
    format: 'html',
    seo: {
      metaTitle: 'Ejemplo de Post en HTML - Sistema de Blogs',
      metaDescription: 'Demostración de cómo crear posts usando HTML en lugar de Markdown en el sistema de blogs.',
      keywords: ['html', 'tutorial', 'blog', 'web development']
    }
  }
];

// Funciones de utilidad
export function getCategoryById(id: string): BlogCategory | undefined {
  return blogCategories.find(category => category.id === id);
}

export function getPostsByCategory(categoryId: string): BlogPost[] {
  return blogPosts.filter(post => 
    post.categories.includes(categoryId) && post.status === 'published'
  );
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => 
    post.tags.includes(tag) && post.status === 'published'
  );
}

export function getPublishedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.status === 'published');
}

export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.status === 'published' && (
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.description.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
      post.categories.some(cat => {
        const category = getCategoryById(cat);
        return category?.name.toLowerCase().includes(lowercaseQuery);
      })
    )
  );
}
