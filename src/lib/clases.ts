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
  // Para quizzes
  quiz?: Quiz;
}

// Nuevas interfaces para el sistema de Quiz
export interface QuizAlternative {
  code: number;
  content: string;
  is_correct: boolean;
}

export interface QuizQuestion {
  code: string;
  title: string;
  type: 'multiple' | 'vof' | 'alternative';
  score: number; // default 10
  alternatives: QuizAlternative[];
}

export interface Quiz {
  id: string;
  title: string;
  description?: string;
  dateStart: string | null; // fecha y hora de inicio
  dateFinish: string | null; // fecha y hora de término
  totalPoints: number;
  show: 'modal' | 'newpage';
  questions: QuizQuestion[];
  status?: 'active' | 'inactive' | 'completed';
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

export interface BaseActivity {
  id: string;
  title: string;
  description?: string;
}

export interface QuizActivity extends BaseActivity {
  type: 'quiz';
  questions: Question[];
}

export interface PracticeActivity extends BaseActivity {
  type: 'practice';
  steps: string[];
  fileType?: string;
}

export type Activity = QuizActivity | PracticeActivity;

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
        // description: 'Click on any file to download it. All materials are organized to facilitate your study.'
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
        name: 'Que son las bases de datos?',
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
        name: 'hr',
        type: 'hr'
      },
      {
        name: 'Semana 2 - 30 Julio 2025',
        type: 'subtitle',
        // description: 'Click on any file to download it. All materials are organized to facilitate your study.'
      },
      {
        name: 'Presentación 2 - Conceptos DBMS',
        type: 'content',
        fileType: 'pdf',
        icon: 'pdf',
        url: 'https://drive.google.com/file/d/192mVIRMd21UndKjeo1h_I4sPdDCdmOJB/view?usp=sharing'
      },
      {
        name: 'Que es un base de datos DBMS?',
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
        fileType: 'url',
        // size: '2.5 MB',
        // password: "123456",
        // status: 'locked',
        url: 'https://miro.com/es/plantillas/diagrama-entidad-relacion/'
      },
      {
        name: 'hr',
        type: 'hr'
      },
      {
        name: 'Semana 3 - 6 Agosto 2025',
        type: 'subtitle',
        // description: 'Click on any file to download it. All materials are organized to facilitate your study.'
      },
      {
        name: 'Presentación 3 - Conceptos Básicos',
        type: 'content',
        fileType: 'pdf',
        icon: 'pdf',
        url: 'https://drive.google.com/file/d/1ErubzIywGG8lhpixIXPi8wGKwwH-9STj/view?usp=sharing'
      },
      {
        name: 'Introducción a Diagramas Entidad Relación - by cidecame.uaeh.edu.mx',
        type: 'content',
        fileType: 'url',
        url: 'http://cidecame.uaeh.edu.mx/lcc/mapa/proyecto/libro14/21_introduccin_a_los_diagramas_entidad__relacin.html'
      },
      {
        name: 'Actividad grupal - Unirse todos a Miro del profesor',
        type: 'content',
        fileType: 'link',
        icon: 'link',
        highlightFlow: true,
        highlightColor: 'Gold',
        password: 'profe2025',
        url: 'https://miro.com/welcomeonboard/L21WUnFuTzhMZkdHYWFZbHNmd0lNWXc2c2xRb21BRXFkdXRVcHJwa3g4Um9zcDkyR3EyMkVkTXFzTGloVmNCTVU1UXVSbDdweDM0V0NpOXgxMzQ4bXlTdlUxeTM0SThycW5yVmw0RWl4TU5xOG1CQi9mY2lvV2pwTWEwbHl4aGNhWWluRVAxeXRuUUgwWDl3Mk1qRGVRPT0hdjE=?share_link_id=885668326843'
      },
      {
        name: 'Tarea de investigación - FN1. FN2, FN3',
        type: 'content',
        fileType: 'document',
        icon: 'document',
        url: 'https://docs.google.com/document/d/1OWQC-R-xrvDz9B5UomJLgSQX3iBezkZn/edit?usp=sharing&ouid=111508538317434257680&rtpof=true&sd=true'
      },
      {
        name: 'Crear equipo de trabajo',
        type: 'content',
        fileType: 'folder',
        icon: 'drive',
        highlightFlow: true,
        highlightColor: 'Diamant',
        password: 'profe2025',
        url: 'https://drive.google.com/drive/folders/1cS33XPcv_Xr2OKgKwrbwdJHwYlFxVmc2?usp=sharing'
      },
      {
        name: 'hr',
        type: 'hr'
      },
      {
        name: 'Quiz: Evaluación de Conceptos Básicos',
        type: 'quiz',
        fileType: 'quiz',
        icon: 'test',
        highlightFlow: true,
        highlightColor: 'Gold',
        status: 'hidden',
        description: 'Evaluación de los conceptos fundamentales de bases de datos',
        quiz: {
          id: 'quiz-conceptos-basicos',
          title: 'Evaluación de Conceptos Básicos de Bases de Datos',
          description: 'Este quiz evalúa tu comprensión de los conceptos fundamentales de bases de datos',
          dateStart: '2025-08-08T09:00:00Z',
          dateFinish: '2025-08-10T23:59:59Z',
          totalPoints: 50,
          show: 'newpage',
          status: 'active',
          questions: [
            {
              code: 'Q001',
              title: '¿Qué es una base de datos?',
              type: 'multiple',
              score: 10,
              alternatives: [
                {
                  code: 1001,
                  content: 'Un programa de computadora',
                  is_correct: false
                },
                {
                  code: 1002,
                  content: 'Una colección organizada de información estructurada',
                  is_correct: true
                },
                {
                  code: 1003,
                  content: 'Un tipo de archivo de texto',
                  is_correct: false
                },
                {
                  code: 1004,
                  content: 'Un sistema operativo',
                  is_correct: false
                }
              ]
            },
            {
              code: 'Q002',
              title: '¿Cuál de las siguientes NO es una característica de las bases de datos?',
              type: 'multiple',
              score: 10,
              alternatives: [
                {
                  code: 2001,
                  content: 'Persistencia',
                  is_correct: false
                },
                {
                  code: 2002,
                  content: 'Consistencia',
                  is_correct: false
                },
                {
                  code: 2003,
                  content: 'Volatilidad',
                  is_correct: true
                },
                {
                  code: 2004,
                  content: 'Seguridad',
                  is_correct: false
                }
              ]
            },
            {
              code: 'Q003',
              title: 'MySQL es un ejemplo de base de datos relacional',
              type: 'vof',
              score: 10,
              alternatives: [
                {
                  code: 3001,
                  content: 'Verdadero',
                  is_correct: true
                },
                {
                  code: 3002,
                  content: 'Falso',
                  is_correct: false
                }
              ]
            },
            {
              code: 'Q004',
              title: '¿Qué significa DBMS?',
              type: 'alternative',
              score: 10,
              alternatives: [
                {
                  code: 4001,
                  content: 'Database Management System',
                  is_correct: true
                },
                {
                  code: 4002,
                  content: 'Data Base Memory Storage',
                  is_correct: false
                },
                {
                  code: 4003,
                  content: 'Digital Binary Management System',
                  is_correct: false
                }
              ]
            },
            {
              code: 'Q005',
              title: 'MongoDB es un ejemplo de base de datos NoSQL',
              type: 'vof',
              score: 10,
              alternatives: [
                {
                  code: 5001,
                  content: 'Verdadero',
                  is_correct: true
                },
                {
                  code: 5002,
                  content: 'Falso',
                  is_correct: false
                }
              ]
            }
          ]
        }
      },
      {
        name: 'Quiz Rápido: Verdadero o Falso',
        type: 'quiz',
        fileType: 'quiz',
        icon: 'test',
        highlightFlow: true,
        highlightColor: 'Esmeralda',
        status: 'hidden',
        description: 'Quiz rápido de 3 preguntas sobre conceptos básicos',
        quiz: {
          id: 'quiz-rapido-vof',
          title: 'Quiz Rápido: Verdadero o Falso',
          description: 'Responde verdadero o falso a las siguientes afirmaciones',
          dateStart: null, // Sin fecha de inicio específica
          dateFinish: null, // Sin fecha de fin específica
          totalPoints: 30,
          show: 'modal',
          status: 'active',
          questions: [
            {
              code: 'VOF001',
              title: 'Una base de datos puede ser utilizada por múltiples usuarios simultáneamente',
              type: 'vof',
              score: 10,
              alternatives: [
                {
                  code: 6001,
                  content: 'Verdadero',
                  is_correct: true
                },
                {
                  code: 6002,
                  content: 'Falso',
                  is_correct: false
                }
              ]
            },
            {
              code: 'VOF002',
              title: 'SQLite es una base de datos que requiere un servidor dedicado',
              type: 'vof',
              score: 10,
              alternatives: [
                {
                  code: 7001,
                  content: 'Verdadero',
                  is_correct: false
                },
                {
                  code: 7002,
                  content: 'Falso',
                  is_correct: true
                }
              ]
            },
            {
              code: 'VOF003',
              title: 'La normalización es un proceso para mejorar el diseño de bases de datos',
              type: 'vof',
              score: 10,
              alternatives: [
                {
                  code: 8001,
                  content: 'Verdadero',
                  is_correct: true
                },
                {
                  code: 8002,
                  content: 'Falso',
                  is_correct: false
                }
              ]
            }
          ]
        }
      },
      {
        name: 'Semana 4 - 13 Agosto 2025',
        type: 'subtitle',
        description: 'Clase práctica.'
      },
      // {
      //   name: 'Presentación 4 - Conceptos Básicos',
      //   type: 'content',
      //   fileType: 'pdf',
      //   icon: 'pdf',
      //   url: 'https://drive.google.com/file/d/1ErubzIywGG8lhpixIXPi8wGKwwH-9STj/view?usp=sharing'
      // },
      {
        name: 'hr',
        type: 'hr'
      },
      {
        name: 'Semana 5 - 20 Agosto 2025',
        type: 'subtitle',
        // description: 'Click on any file to download it. All materials are organized to facilitate your study.'
      },
        {
        name: '📚 Documentación de la Clase - Conceptos Básicos',
        type: 'document',
        fileType: 'document',
        icon: 'document',
        format: 'markdown',
        showContent: 'modal',
        content: "\n# Fundamentos de Bases de Datos\n\n## ¿Qué es una Base de Datos?\n\nUna **base de datos** es una colección organizada de información estructurada, o datos, típicamente almacenados electrónicamente en un sistema informático.\n\n### Características principales:\n\n- **Persistencia**: Los datos se mantienen incluso cuando el sistema se apaga\n- **Consistencia**: Los datos siguen reglas y restricciones definidas\n- **Seguridad**: Control de acceso y protección de datos\n- **Integridad**: Precisión y confiabilidad de los datos\n\n## Tipos de Bases de Datos\n\n### 1. Bases de Datos Relacionales\n- **MySQL**: Muy popular para aplicaciones web\n- **PostgreSQL**: Potente y con características avanzadas\n- **SQLite**: Ligera, perfecta para aplicaciones móviles\n- **Oracle**: Empresarial, muy robusta\n\n### 2. Bases de Datos No Relacionales (NoSQL)\n- **MongoDB**: Documentos JSON\n- **Redis**: Almacenamiento en memoria\n- **Cassandra**: Distribuida y escalable\n\n## Ventajas de usar Bases de Datos\n\n1. **Eficiencia**: Acceso rápido a la información\n2. **Escalabilidad**: Puede crecer con las necesidades\n3. **Concurrencia**: Múltiples usuarios pueden acceder simultáneamente\n4. **Backup y Recuperación**: Protección contra pérdida de datos\n\n> **Nota importante**: Una base de datos bien diseñada es fundamental para el éxito de cualquier aplicación.\n\n## Próximos temas\n\nEn las siguientes clases veremos:\n- Arquitectura de DBMS\n- Modelo Entidad-Relación\n- Normalización\n- Consultas SQL básicas\n        "
      },
      {
        name: 'Seleccionar caso de estudio',
        highlightFlow: true,
        type: 'content',
        fileType: 'drive',
        icon: 'drive',
        url: 'https://drive.google.com/drive/folders/1vbG3w5ru8-nrAAhHwDzxmtSqfRiNC-kx?usp=sharing'
      },

    
      // url: 'https://drive.google.com/drive/folders/1FOFOLtmD1wDf642-xca2XdDaoWRItG3D?usp=sharing'
      // {
      //   name: '📚 Documentación de la Clase - Conceptos Básicos',
      //   type: 'document',
      //   fileType: 'document',
      //   icon: 'document',
      //   format: 'markdown',
      //   showContent: 'modal',
      //   content: "\n# Fundamentos de Bases de Datos\n\n## ¿Qué es una Base de Datos?\n\nUna **base de datos** es una colección organizada de información estructurada, o datos, típicamente almacenados electrónicamente en un sistema informático.\n\n### Características principales:\n\n- **Persistencia**: Los datos se mantienen incluso cuando el sistema se apaga\n- **Consistencia**: Los datos siguen reglas y restricciones definidas\n- **Seguridad**: Control de acceso y protección de datos\n- **Integridad**: Precisión y confiabilidad de los datos\n\n## Tipos de Bases de Datos\n\n### 1. Bases de Datos Relacionales\n- **MySQL**: Muy popular para aplicaciones web\n- **PostgreSQL**: Potente y con características avanzadas\n- **SQLite**: Ligera, perfecta para aplicaciones móviles\n- **Oracle**: Empresarial, muy robusta\n\n### 2. Bases de Datos No Relacionales (NoSQL)\n- **MongoDB**: Documentos JSON\n- **Redis**: Almacenamiento en memoria\n- **Cassandra**: Distribuida y escalable\n\n## Ventajas de usar Bases de Datos\n\n1. **Eficiencia**: Acceso rápido a la información\n2. **Escalabilidad**: Puede crecer con las necesidades\n3. **Concurrencia**: Múltiples usuarios pueden acceder simultáneamente\n4. **Backup y Recuperación**: Protección contra pérdida de datos\n\n> **Nota importante**: Una base de datos bien diseñada es fundamental para el éxito de cualquier aplicación.\n\n## Próximos temas\n\nEn las siguientes clases veremos:\n- Arquitectura de DBMS\n- Modelo Entidad-Relación\n- Normalización\n- Consultas SQL básicas\n        "
      // },
      // {
      //   name: '📋 Guía Práctica - Primeros Pasos',
      //   type: 'document',
      //   fileType: 'document',
      //   icon: 'document',
      //   format: 'html',
      //   showContent: 'details',
      //   content: "\n<h2>Guía Práctica: Primeros Pasos con Bases de Datos</h2>\n\n<p>Esta guía te ayudará a comenzar con el estudio de bases de datos de manera práctica.</p>\n\n<h3>🎯 Objetivos de Aprendizaje</h3>\n<ul>\n  <li>Comprender los conceptos fundamentales</li>\n  <li>Identificar diferentes tipos de bases de datos</li>\n  <li>Reconocer casos de uso reales</li>\n</ul>\n\n<h3>📝 Actividades Recomendadas</h3>\n\n<div style=\"background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 15px 0;\">\n  <h4>Actividad 1: Investigación</h4>\n  <p>Investiga sobre 3 empresas que usen bases de datos y describe:</p>\n  <ul>\n    <li>¿Qué tipo de base de datos utilizan?</li>\n    <li>¿Para qué la utilizan?</li>\n    <li>¿Qué ventajas les proporciona?</li>\n  </ul>\n</div>\n\n<div style=\"background: #fff0f0; padding: 15px; border-radius: 8px; margin: 15px 0;\">\n  <h4>Actividad 2: Análisis</h4>\n  <p>Piensa en una aplicación que uses diariamente (red social, banco, etc.) y analiza:</p>\n  <ul>\n    <li>¿Qué datos almacenaría?</li>\n    <li>¿Cómo se relacionarían esos datos?</li>\n    <li>¿Qué consultas serían comunes?</li>\n  </ul>\n</div>\n\n<h3>🔗 Recursos Adicionales</h3>\n<p>Para profundizar en el tema, te recomendamos:</p>\n<ul>\n  <li><a href=\"https://www.w3schools.com/sql/\" target=\"_blank\">W3Schools SQL Tutorial</a></li>\n  <li><a href=\"https://www.postgresql.org/docs/\" target=\"_blank\">Documentación PostgreSQL</a></li>\n  <li><a href=\"https://dev.mysql.com/doc/\" target=\"_blank\">Documentación MySQL</a></li>\n</ul>\n\n<h3>📊 Evaluación</h3>\n<p>Al final de esta unidad serás evaluado en:</p>\n<ul>\n  <li>Comprensión de conceptos básicos (30%)</li>\n  <li>Identificación de tipos de bases de datos (25%)</li>\n  <li>Análisis de casos de uso (25%)</li>\n  <li>Participación en actividades (20%)</li>\n</ul>\n        "
      // },
      // {
      //   name: '📖 Resumen de Conceptos Clave',
      //   type: 'document',
      //   fileType: 'document',
      //   icon: 'document',
      //   format: 'markdown',
      //   showContent: 'inline',
      //   content: "\n## Resumen de Conceptos Clave\n\n### Base de Datos\n- **Definición**: Colección organizada de información estructurada\n- **Propósito**: Almacenar, gestionar y recuperar datos de manera eficiente\n\n### DBMS (Database Management System)\n- **Función**: Software que gestiona las bases de datos\n- **Responsabilidades**:\n  - Crear y mantener la base de datos\n  - Proporcionar acceso seguro a los datos\n  - Garantizar la integridad de los datos\n\n### Tipos de Usuarios\n1. **Administradores de BD**: Gestionan el sistema\n2. **Diseñadores**: Crean la estructura de la BD\n3. **Desarrolladores**: Crean aplicaciones que usan la BD\n4. **Usuarios finales**: Consultan y modifican datos\n\n### Ventajas de las Bases de Datos\n- ✅ **Eficiencia**: Acceso rápido a la información\n- ✅ **Escalabilidad**: Puede crecer con las necesidades\n- ✅ **Seguridad**: Control de acceso y protección\n- ✅ **Integridad**: Datos precisos y confiables\n- ✅ **Concurrencia**: Múltiples usuarios simultáneos\n\n> **Recordatorio**: Una base de datos bien diseñada es fundamental para el éxito de cualquier aplicación.\n        "
      // },
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
      // {
      //   name: 'Documento con Modal (Formato 1)',
      //   type: 'document',
      //   showContent: 'modal',
      //   content: '# Título del Documento\n\nEste es un documento que se muestra en un modal.\n\n## Características\n\n- Se abre en una ventana modal\n- Ideal para documentos largos\n- No interrumpe el flujo de la página',
      //   format: 'markdown'
      // },
      // {
      //   name: 'Documento Expandible (Formato 2)',
      //   type: 'document',
      //   showContent: 'details',
      //   content: '# Conceptos de Bases de Datos\n\n## ¿Qué es una base de datos?\n\nUna base de datos es una colección organizada de información estructurada, o datos, típicamente almacenados electrónicamente en un sistema informático.\n\n## Tipos de Bases de Datos\n\n1. **Bases de datos relacionales**: MySQL, PostgreSQL, Oracle\n2. **Bases de datos NoSQL**: MongoDB, Cassandra, Redis\n3. **Bases de datos en la nube**: Amazon RDS, Google Cloud SQL\n\n## Ventajas\n\n- **Integridad de datos**: Garantiza la consistencia\n- **Seguridad**: Control de acceso y permisos\n- **Escalabilidad**: Puede crecer según las necesidades',
      //   format: 'markdown'
      // },
      // {
      //   name: 'Documento Inline (Formato 3)',
      //   type: 'document',
      //   showContent: 'inline',
      //   content: '# SQL Básico\n\n## Comandos principales\n\n### SELECT\n```sql\nSELECT * FROM usuarios WHERE edad > 18;\n```\n\n### INSERT\n```sql\nINSERT INTO usuarios (nombre, email) VALUES ("Juan", "juan@email.com");\n```\n\n### UPDATE\n```sql\nUPDATE usuarios SET edad = 25 WHERE id = 1;\n```\n\n### DELETE\n```sql\nDELETE FROM usuarios WHERE id = 1;\n```\n\n## Ejercicios Prácticos\n\n1. Crear una tabla de productos\n2. Insertar 5 productos\n3. Consultar productos con precio mayor a $100\n4. Actualizar el precio de un producto\n5. Eliminar productos sin stock',
      //   format: 'markdown'
      // }
    ],
    // activities: [
    //   {
    //     id: 'activity-1',
    //     title: 'Actividad Práctica: Creación de una Base de Datos',
    //     description: 'En esta actividad, crearás tu primera base de datos y una tabla de usuarios.',
    //     type: 'practice',
    //     fileType: 'sql',
    //     steps: [
    //       'Crea una nueva base de datos llamada "mi_primera_db"',
    //       'Diseña una tabla llamada "usuarios" con los campos "id", "nombre" y "email"',
    //       'Inserta 3 registros en la tabla "usuarios"',
    //       'Verifica que los datos se hayan insertado correctamente'
    //     ],
    //   },
    // ]
  }
];

export default classes; 