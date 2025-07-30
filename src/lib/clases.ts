export interface Material {
  name: string;
  type: string;
  description?: string;
  size?: string;
  url?: string;
  password?: string;
  fileType?: string;
  highlight?: boolean;
  highlightFlow?: boolean;
  status?: string;
}

export interface Class {
  id: string;
  title: string;
  description: string;
  date: string;
  files?: number;
  materials: Material[];
  img?: string;
}

const classes: Class[] = [
  {
    id: '2025-database-fundamentals',
    title: 'Fundamentos de bases de datos',
    description: 'Conceptos basicos y principios de las bases de datos',
    date: '2025-07-30',
    img: 'https://bynder.aggreko.com/transform/0c3fa223-32cc-4a5c-9e1d-836942d6afd4/energia-climatizacion-empresa-data-center-006',
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
        name: 'Presentacion - Conceptos Basicos',
        type: 'content',
        fileType: 'ppt',
        // size: '2.5 MB',
        // password: "123456",
        // status: 'locked',
        url: 'https://docs.google.com/presentation/d/1o2AfYhShcnFcPS1PPX7JijrNp-Ctx5hl/edit?usp=sharing&ouid=111508538317434257680&rtpof=true&sd=true'
      },
      {
        name: '¿Que son las bases de datos?',
        type: 'content',
        fileType: 'youtube',
        highlightFlow: true,
        // password: "123456",
        // status: 'locked',
        // status: 'hidden',
        url: 'https://www.youtube.com/watch?v=6S8A-1jBD5Y&ab_channel=Develoteca-OscarUh'
      },
      {
        name: 'Archivo de Ejercicios',
        type: 'content',
        fileType: 'xlsx',
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

        // status: 'unlocked',
        url: 'https://drive.google.com/drive/folders/1CcYQnnnzFdRZX4_MlHyYALCY2D49nBkR?usp=sharing'
      },
      {
        name: 'Semana 2 - 30 Julio 2025',
        type: 'subtitle',
        description: 'Click on any file to download it. All materials are organized to facilitate your study.'
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
      //   fileType: 'ppt',
      //   // size: '2.5 MB',
      //   url: '/documentos/clase-1/template.xlsx'
      // },
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