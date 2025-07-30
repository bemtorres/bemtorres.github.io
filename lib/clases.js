const clases = [
  {
    id: 'clase-1',
    titulo: 'Fundamentos de Bases de Datos',
    descripcion: 'Conceptos básicos de bases de datos',
    fecha: '2024-07-23',
    archivos: 4,
    materiales: [
      {
        nombre: 'Presentación - Conceptos Básicos',
        tipo: 'ppt',
        tamaño: '2.5 MB',
        url: '/documentos/clase-1/template.xlsx'
      },
      {
        nombre: 'Ejercicios pdf',
        tipo: 'pdf',
        tamaño: '1.8 MB',
        url: '/documentos/clase-1/template.pdf'
      },
      {
        nombre: 'Guía de Estudio docx',
        tipo: 'docx',
        tamaño: '3.2 MB',
        url: '/documentos/clase-1/template.docx'
      },
      {
        nombre: 'Código de Ejemplos zip',
        tipo: 'zip',
        tamaño: '500 KB',
        url: '/documentos/clase-1/template.zip'
      },
      {
        nombre: 'Código de Ejemplos text',
        tipo: 'text',
        tamaño: '500 KB',
        url: '/documentos/clase-1/template.txt'
      }
    ]
  },
  {
    id: 'clase-2',
    titulo: 'Estructuras de Datos',
    descripcion: 'Arrays, listas, pilas y colas',
    fecha: '2024-01-22',
    archivos: 3,
    materiales: [
      {
        nombre: 'Teoría - Estructuras de Datos',
        tipo: 'pdf',
        tamaño: '4.1 MB',
        url: '/documentos/clase-2/teoria-estructuras.pdf'
      },
      {
        nombre: 'Implementaciones en Java',
        tipo: 'zip',
        tamaño: '2.3 MB',
        url: '/documentos/clase-2/implementaciones-java.zip'
      },
      {
        nombre: 'Ejercicios de Evaluación',
        tipo: 'docx',
        tamaño: '1.9 MB',
        url: '/documentos/clase-2/ejercicios-evaluacion.docx'
      }
    ]
  },
  {
    id: 'clase-3',
    titulo: 'Programación Orientada a Objetos',
    descripcion: 'Clases, objetos, herencia y polimorfismo',
    fecha: '2024-01-29',
    archivos: 3,
    materiales: [
      {
        nombre: 'Presentación - POO',
        tipo: 'ppt',
        tamaño: '5.2 MB',
        url: '/documentos/clase-3/presentacion-poo.pptx'
      },
      {
        nombre: 'Proyecto Práctico',
        tipo: 'zip',
        tamaño: '8.7 MB',
        url: '/documentos/clase-3/proyecto-practico.zip'
      },
      {
        nombre: 'Documentación del Proyecto',
        tipo: 'pdf',
        tamaño: '2.1 MB',
        url: '/documentos/clase-3/documentacion-proyecto.pdf'
      }
    ]
  },
  {
    id: 'clase-4',
    titulo: 'Bases de Datos',
    descripcion: 'SQL, relaciones y consultas',
    fecha: '2024-02-05',
    archivos: 3,
    materiales: [
      {
        nombre: 'Manual de SQL',
        tipo: 'pdf',
        tamaño: '6.3 MB',
        url: '/documentos/clase-4/manual-sql.pdf'
      },
      {
        nombre: 'Base de Datos de Ejemplo',
        tipo: 'sql',
        tamaño: '150 KB',
        url: '/documentos/clase-4/base-datos-ejemplo.sql'
      },
      {
        nombre: 'Ejercicios SQL',
        tipo: 'docx',
        tamaño: '2.8 MB',
        url: '/documentos/clase-4/ejercicios-sql.docx'
      }
    ]
  }
];

export default clases;