export interface Material {
  name: string;
  type: string;
  description?: string;
  size?: string;
  icon?: string;
  url?: string;
  password?: string;
  fileType?: string;
  highlight?: boolean;
  highlightFlow?: boolean;
  highlightColor?: 'Diamant' | 'Gold' | 'Esmeralda' | 'Platinum';
  status?: string;
  // Para documentos con contenido HTML/Markdown
  content?: string;
  format?: 'markdown' | 'html';
  showContent?: 'modal' | 'details' | 'inline';
}

export interface BaseQuestion {
  id: string;
  text: string;
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true-false';
  correctAnswer: boolean;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: { id: string; text: string }[];
  correctOptionId: string;
}

export interface FillInTheBlankQuestion extends BaseQuestion {
  type: 'fill-in-the-blank';
  correctAnswer: string;
  options?: string[]; // Opcional: banco de palabras al estilo Duolingo
}

export type Question = TrueFalseQuestion | MultipleChoiceQuestion | FillInTheBlankQuestion;

export interface Activity {
  id: string;
  title: string;
  description?: string;
  type: 'quiz';
  questions: Question[];
}
export interface Class {
  id: string;
  title: string;
  description: string;
  date: string;
  materials: Material[];
  activities?: Activity[];
  img?: string;
}

const classes: Class[] = [
  {
    id: '2025-database-fundamentals',
    title: 'Fundamentos de bases de datos',
    description: 'Conceptos basicos y principios de las bases de datos',
    date: '2025-07-30',
    img: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg',
    materials: [
      {
        name: 'Unidad 1: Introduccion a las bases de datos y a la arquitectura de DBMS',
        type: 'title',
        description: 'Contenido: 8 horas de material de estudio'
      },
      {
        name: 'Semana 1 - 23 Julio 2025',
        type: 'subtitle',
        description: 'Click on any file to download it. All materials are organized to facilitate your study.'
      },
      {
        name: 'Presentación 1 - Conceptos Basicos',
        type: 'content',
        fileType: 'pdf',
        icon: 'pdf',
        // size: '2.5 MB',
        // password: "123456",
        // status: 'locked',
        url: 'https://drive.google.com/file/d/1TvrdOTX8USUihE9mFA_1COBtZs0njC53/view?usp=sharing'
      },
      {
        name: '¿Que son las bases de datos?',
        type: 'content',
        fileType: 'youtube',
        icon: 'youtube',
        // highlightFlow: true,
        // password: "123456",
        // status: 'locked',
        // status: 'hidden',
        url: 'https://www.youtube.com/watch?v=6S8A-1jBD5Y&ab_channel=Develoteca-OscarUh'
      },
      {
        name: 'Ejemplo de recolectar información',
        type: 'content',
        fileType: 'xlsx',
        icon: 'excel',
        // size: '2.5 MB',
        // password: "123456",
        // status: 'locked',
        url: 'https://docs.google.com/spreadsheets/d/1LAPnnvW1kpAsCdxXAC_OFdjtfAAjRgvQ/edit?usp=sharing&ouid=111508538317434257680&rtpof=true&sd=true'
      },
      {
        name: 'Material Oculto (No se muestra)',
        type: 'content',
        fileType: 'pdf',
        size: '1.2 MB',
        status: 'hidden',
        url: 'https://example.com/hidden-file.pdf'
      },
      {
        name: 'Subir actividad 1',
        type: 'content',
        fileType: 'folder',
        password: 'profe2025',
        highlightFlow: true,
        highlightColor: 'Platinum',
        icon: 'test',
        // status: 'unlocked',
        url: 'https://drive.google.com/drive/folders/1CcYQnnnzFdRZX4_MlHyYALCY2D49nBkR?usp=sharing'
      },
      {
        name: 'Semana 2 - 30 Julio 2025',
        type: 'subtitle',
        description: 'Click on any file to download it. All materials are organized to facilitate your study.'
      },
      {
        name: 'Presentación 2 - Conceptos DBMS',
        type: 'content',
        fileType: 'pdf',
        icon: 'pdf',
        url: 'https://drive.google.com/drive/folders/1FOFOLtmD1wDf642-xca2XdDaoWRItG3D?usp=sharing'
      },
      {
        name: '¿Qué es un base de datos DBMS?',
        type: 'content',
        fileType: 'youtube',
        // highlightFlow: true,
        // password: "123456",
        // status: 'locked',
        url: 'https://www.youtube.com/shorts/9-9UwBwXMts'
      },
      {
        name: 'Caso de estudio',
        type: 'content',
        fileType: 'folder',
        icon: 'drive',
        url: 'https://drive.google.com/drive/folders/1FOFOLtmD1wDf642-xca2XdDaoWRItG3D?usp=sharing'
      },
      {
        name: 'Miro - Diagrama de Entidad Relacion',
        type: 'content',
        fileType: 'link',
        // size: '2.5 MB',
        // password: "123456",
        // status: 'locked',
        url: 'https://miro.com/es/plantillas/diagrama-entidad-relacion/'
      },
      {
        name: '📚 Documentación de la Clase - Conceptos Básicos',
        type: 'document',
        fileType: 'document',
        icon: 'document',
        format: 'markdown',
        showContent: 'modal',
        content: `
# Fundamentos de Bases de Datos

## ¿Qué es una Base de Datos?

Una **base de datos** es una colección organizada de información estructurada, o datos, típicamente almacenados electrónicamente en un sistema informático.

### Características principales:

- **Persistencia**: Los datos se mantienen incluso cuando el sistema se apaga
- **Consistencia**: Los datos siguen reglas y restricciones definidas
- **Seguridad**: Control de acceso y protección de datos
- **Integridad**: Precisión y confiabilidad de los datos

## Tipos de Bases de Datos

### 1. Bases de Datos Relacionales
- **MySQL**: Muy popular para aplicaciones web
- **PostgreSQL**: Potente y con características avanzadas
- **SQLite**: Ligera, perfecta para aplicaciones móviles
- **Oracle**: Empresarial, muy robusta

### 2. Bases de Datos No Relacionales (NoSQL)
- **MongoDB**: Documentos JSON
- **Redis**: Almacenamiento en memoria
- **Cassandra**: Distribuida y escalable

## Ventajas de usar Bases de Datos

1. **Eficiencia**: Acceso rápido a la información
2. **Escalabilidad**: Puede crecer con las necesidades
3. **Concurrencia**: Múltiples usuarios pueden acceder simultáneamente
4. **Backup y Recuperación**: Protección contra pérdida de datos

> **Nota importante**: Una base de datos bien diseñada es fundamental para el éxito de cualquier aplicación.

## Próximos temas

En las siguientes clases veremos:
- Arquitectura de DBMS
- Modelo Entidad-Relación
- Normalización
- Consultas SQL básicas
        `
      },
      {
        name: '📋 Guía Práctica - Primeros Pasos',
        type: 'document',
        fileType: 'document',
        icon: 'document',
        format: 'html',
        showContent: 'details',
        content: `
<h2>Guía Práctica: Primeros Pasos con Bases de Datos</h2>

<p>Esta guía te ayudará a comenzar con el estudio de bases de datos de manera práctica.</p>

<h3>🎯 Objetivos de Aprendizaje</h3>
<ul>
  <li>Comprender los conceptos fundamentales</li>
  <li>Identificar diferentes tipos de bases de datos</li>
  <li>Reconocer casos de uso reales</li>
</ul>

<h3>📝 Actividades Recomendadas</h3>

<div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
  <h4>Actividad 1: Investigación</h4>
  <p>Investiga sobre 3 empresas que usen bases de datos y describe:</p>
  <ul>
    <li>¿Qué tipo de base de datos utilizan?</li>
    <li>¿Para qué la utilizan?</li>
    <li>¿Qué ventajas les proporciona?</li>
  </ul>
</div>

<div style="background: #fff0f0; padding: 15px; border-radius: 8px; margin: 15px 0;">
  <h4>Actividad 2: Análisis</h4>
  <p>Piensa en una aplicación que uses diariamente (red social, banco, etc.) y analiza:</p>
  <ul>
    <li>¿Qué datos almacenaría?</li>
    <li>¿Cómo se relacionarían esos datos?</li>
    <li>¿Qué consultas serían comunes?</li>
  </ul>
</div>

<h3>🔗 Recursos Adicionales</h3>
<p>Para profundizar en el tema, te recomendamos:</p>
<ul>
  <li><a href="https://www.w3schools.com/sql/" target="_blank">W3Schools SQL Tutorial</a></li>
  <li><a href="https://www.postgresql.org/docs/" target="_blank">Documentación PostgreSQL</a></li>
  <li><a href="https://dev.mysql.com/doc/" target="_blank">Documentación MySQL</a></li>
</ul>

<h3>📊 Evaluación</h3>
<p>Al final de esta unidad serás evaluado en:</p>
<ul>
  <li>Comprensión de conceptos básicos (30%)</li>
  <li>Identificación de tipos de bases de datos (25%)</li>
  <li>Análisis de casos de uso (25%)</li>
  <li>Participación en actividades (20%)</li>
</ul>
        `
      },
      {
        name: '📖 Resumen de Conceptos Clave',
        type: 'document',
        fileType: 'document',
        icon: 'document',
        format: 'markdown',
        showContent: 'inline',
        content: `
## Resumen de Conceptos Clave

### Base de Datos
- **Definición**: Colección organizada de información estructurada
- **Propósito**: Almacenar, gestionar y recuperar datos de manera eficiente

### DBMS (Database Management System)
- **Función**: Software que gestiona las bases de datos
- **Responsabilidades**:
  - Crear y mantener la base de datos
  - Proporcionar acceso seguro a los datos
  - Garantizar la integridad de los datos

### Tipos de Usuarios
1. **Administradores de BD**: Gestionan el sistema
2. **Diseñadores**: Crean la estructura de la BD
3. **Desarrolladores**: Crean aplicaciones que usan la BD
4. **Usuarios finales**: Consultan y modifican datos

### Ventajas de las Bases de Datos
- ✅ **Eficiencia**: Acceso rápido a la información
- ✅ **Escalabilidad**: Puede crecer con las necesidades
- ✅ **Seguridad**: Control de acceso y protección
- ✅ **Integridad**: Datos precisos y confiables
- ✅ **Concurrencia**: Múltiples usuarios simultáneos

> **Recordatorio**: Una base de datos bien diseñada es fundamental para el éxito de cualquier aplicación.
        `
      },
      // {
      //   name: 'Caso de estudio',
      //   type: 'content',
      //   fileType: 'folder',
      //   status: 'hidden',
      //   url: 'https://docs.google.com/presentation/d/1eM_piO7Kdqo0--LQv638VBNx7fiPGyA2/edit?usp=sharing&ouid=111508538317434257680&rtpof=true&sd=true'
      // },
      // {
      //   name: 'Carpeta de materiales',
      //   type: 'content',
      //   fileType: 'folder',
      //   url: 'https://drive.google.com/drive/folders/1FOFOLtmD1wDf642-xca2XdDaoWRItG3D?usp=sharing'
      // },
      // {
      //   name: 'Presentation - Basic Concepts (Destacado)',
      //   type: 'content',
      //   highlight: true,
      //   highlightFlow: true,
      //   highlightColor: 'Gold', // Color por defecto
      //   fileType: 'ppt',
      //   // size: '2.5 MB',
      //   url: '/documentos/clase-1/template.xlsx'
      // },
      // {
      //   name: 'Material Diamant (Ejemplo)',
      //   type: 'content',
      //   highlightFlow: true,
      //   highlightColor: 'Diamant', // Color púrpura/diamante
      //   fileType: 'pdf',
      //   url: 'https://example.com/material-diamant.pdf'
      // },
      // {
      //   name: 'Material Esmeralda (Ejemplo)',
      //   type: 'content',
      //   highlightFlow: true,
      //   highlightColor: 'Esmeralda', // Color verde esmeralda
      //   fileType: 'folder',
      //   url: 'https://example.com/material-esmeralda'
      // },
      // {
      //   name: 'Material Platinum (Ejemplo)',
      //   type: 'content',
      //   highlightFlow: true,
      //   highlightColor: 'Platinum', // Color gris platino
      //   fileType: 'link',
      //   url: 'https://example.com/material-platinum'
      // },
      {
        name: 'Documento con Modal (Formato 1)',
        type: 'document',
        showContent: 'modal',
        content: '# Título del Documento\n\nEste es un documento que se muestra en un modal.\n\n## Características\n\n- Se abre en una ventana modal\n- Ideal para documentos largos\n- No interrumpe el flujo de la página',
        format: 'markdown'
      },
      {
        name: 'Documento Expandible (Formato 2)',
        type: 'document',
        showContent: 'details',
        content: '# Conceptos de Bases de Datos\n\n## ¿Qué es una base de datos?\n\nUna base de datos es una colección organizada de información estructurada, o datos, típicamente almacenados electrónicamente en un sistema informático.\n\n## Tipos de Bases de Datos\n\n1. **Bases de datos relacionales**: MySQL, PostgreSQL, Oracle\n2. **Bases de datos NoSQL**: MongoDB, Cassandra, Redis\n3. **Bases de datos en la nube**: Amazon RDS, Google Cloud SQL\n\n## Ventajas\n\n- **Integridad de datos**: Garantiza la consistencia\n- **Seguridad**: Control de acceso y permisos\n- **Escalabilidad**: Puede crecer según las necesidades',
        format: 'markdown'
      },
      {
        name: 'Documento Inline (Formato 3)',
        type: 'document',
        showContent: 'inline',
        content: '# SQL Básico\n\n## Comandos principales\n\n### SELECT\n```sql\nSELECT * FROM usuarios WHERE edad > 18;\n```\n\n### INSERT\n```sql\nINSERT INTO usuarios (nombre, email) VALUES ("Juan", "juan@email.com");\n```\n\n### UPDATE\n```sql\nUPDATE usuarios SET edad = 25 WHERE id = 1;\n```\n\n### DELETE\n```sql\nDELETE FROM usuarios WHERE id = 1;\n```\n\n## Ejercicios Prácticos\n\n1. Crear una tabla de productos\n2. Insertar 5 productos\n3. Consultar productos con precio mayor a $100\n4. Actualizar el precio de un producto\n5. Eliminar productos sin stock',
        format: 'markdown'
      },
    ]
  },
  // {
  //   id: 'class-2',
  //   title: 'Data Structures',
  //   description: 'Arrays, lists, stacks and queues',
  //   date: '2024-01-22',
  //   materials: [
  //     {
  //       name: 'Linear Structures',
  //       type: 'title',
  //       description: 'Arrays, linked lists and their implementations'
  //     },
  //     {
  //       name: 'Theory - Data Structures',
  //       type: 'content',
  //       fileType: 'pdf',
  //       size: '4.1 MB',
  //       url: '/documentos/clase-2/teoria-estructuras.pdf'
  //     },
  //     {
  //       name: 'Java Implementations',
  //       type: 'content',
  //       fileType: 'zip',
  //       size: '2.3 MB',
  //       url: '/documentos/clase-2/implementaciones-java.zip'
  //     }
  //   ]
  // },
  // {
  //   id: 'class-3',
  //   title: 'Object-Oriented Programming',
  //   description: 'Classes, objects, inheritance and polymorphism',
  //   date: '2024-01-29',
  //   materials: [
  //     {
  //       name: 'OOP Concepts',
  //       type: 'title',
  //       description: 'Encapsulation, inheritance and polymorphism'
  //     },
  //     {
  //       name: 'Presentation - OOP',
  //       type: 'content',
  //       fileType: 'ppt',
  //       size: '5.2 MB',
  //       url: '/documentos/clase-3/presentacion-poo.pptx'
  //     },
  //     {
  //       name: 'Practical Project',
  //       type: 'content',
  //       fileType: 'zip',
  //       size: '8.7 MB',
  //       url: '/documentos/clase-3/proyecto-practico.zip'
  //     }
  //   ]
  // }
];

export default classes; 