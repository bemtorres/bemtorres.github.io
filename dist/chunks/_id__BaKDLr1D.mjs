import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_BYb7ya5r.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_8rIu6c_8.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const clases = [
    {
      id: "clase-1",
      titulo: "Introducci\xF3n a la Programaci\xF3n",
      descripcion: "Conceptos b\xE1sicos de programaci\xF3n y algoritmos",
      fecha: "2024-01-15",
      materiales: [
        {
          nombre: "Presentaci\xF3n - Conceptos B\xE1sicos",
          tipo: "ppt",
          tama\u00F1o: "2.5 MB",
          url: "/documentos/clase-1/presentacion-conceptos-basicos.pptx"
        },
        {
          nombre: "Ejercicios Pr\xE1cticos",
          tipo: "pdf",
          tama\u00F1o: "1.8 MB",
          url: "/documentos/clase-1/ejercicios-practicos.pdf"
        },
        {
          nombre: "Gu\xEDa de Estudio",
          tipo: "docx",
          tama\u00F1o: "3.2 MB",
          url: "/documentos/clase-1/guia-estudio.docx"
        },
        {
          nombre: "C\xF3digo de Ejemplos",
          tipo: "zip",
          tama\u00F1o: "500 KB",
          url: "/documentos/clase-1/ejemplos-codigo.zip"
        }
      ]
    },
    {
      id: "clase-2",
      titulo: "Estructuras de Datos",
      descripcion: "Arrays, listas, pilas y colas",
      fecha: "2024-01-22",
      materiales: [
        {
          nombre: "Teor\xEDa - Estructuras de Datos",
          tipo: "pdf",
          tama\u00F1o: "4.1 MB",
          url: "/documentos/clase-2/teoria-estructuras.pdf"
        },
        {
          nombre: "Implementaciones en Java",
          tipo: "zip",
          tama\u00F1o: "2.3 MB",
          url: "/documentos/clase-2/implementaciones-java.zip"
        },
        {
          nombre: "Ejercicios de Evaluaci\xF3n",
          tipo: "docx",
          tama\u00F1o: "1.9 MB",
          url: "/documentos/clase-2/ejercicios-evaluacion.docx"
        }
      ]
    },
    {
      id: "clase-3",
      titulo: "Programaci\xF3n Orientada a Objetos",
      descripcion: "Clases, objetos, herencia y polimorfismo",
      fecha: "2024-01-29",
      materiales: [
        {
          nombre: "Presentaci\xF3n - POO",
          tipo: "ppt",
          tama\u00F1o: "5.2 MB",
          url: "/documentos/clase-3/presentacion-poo.pptx"
        },
        {
          nombre: "Proyecto Pr\xE1ctico",
          tipo: "zip",
          tama\u00F1o: "8.7 MB",
          url: "/documentos/clase-3/proyecto-practico.zip"
        },
        {
          nombre: "Documentaci\xF3n del Proyecto",
          tipo: "pdf",
          tama\u00F1o: "2.1 MB",
          url: "/documentos/clase-3/documentacion-proyecto.pdf"
        }
      ]
    },
    {
      id: "clase-4",
      titulo: "Bases de Datos",
      descripcion: "SQL, relaciones y consultas",
      fecha: "2024-02-05",
      materiales: [
        {
          nombre: "Manual de SQL",
          tipo: "pdf",
          tama\u00F1o: "6.3 MB",
          url: "/documentos/clase-4/manual-sql.pdf"
        },
        {
          nombre: "Base de Datos de Ejemplo",
          tipo: "sql",
          tama\u00F1o: "150 KB",
          url: "/documentos/clase-4/base-datos-ejemplo.sql"
        },
        {
          nombre: "Ejercicios SQL",
          tipo: "docx",
          tama\u00F1o: "2.8 MB",
          url: "/documentos/clase-4/ejercicios-sql.docx"
        }
      ]
    }
  ];
  return clases.map((clase) => ({
    params: { id: clase.id },
    props: { clase }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { clase } = Astro2.props;
  function getIconoArchivo(tipo) {
    const iconos = {
      pdf: "\u{1F4C4}",
      ppt: "\u{1F4CA}",
      docx: "\u{1F4DD}",
      zip: "\u{1F4E6}",
      sql: "\u{1F5C4}\uFE0F"
    };
    return iconos[tipo] || "\u{1F4C4}";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${clase.titulo} - Materiales` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <nav class="flex" aria-label="Breadcrumb"> <ol class="inline-flex items-center space-x-1 md:space-x-3"> <li class="inline-flex items-center"> <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600">
Inicio
</a> </li> <li> <div class="flex items-center"> <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> <a href="/clases" class="ml-1 text-sm font-medium text-gray-700 hover:text-primary-600 md:ml-2">
Clases
</a> </div> </li> <li aria-current="page"> <div class="flex items-center"> <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2">${clase.titulo}</span> </div> </li> </ol> </nav> </div> <div class="bg-white rounded-lg shadow-md p-6 mb-8"> <h1 class="text-3xl font-bold text-gray-900 mb-4">${clase.titulo}</h1> <p class="text-gray-600 mb-4">${clase.descripcion}</p> <div class="flex items-center text-sm text-gray-500"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path> </svg>
Fecha: ${new Date(clase.fecha).toLocaleDateString("es-ES")} </div> </div> <div class="mb-6"> <h2 class="text-2xl font-semibold text-gray-900 mb-4">Materiales Disponibles</h2> <p class="text-gray-600 mb-6">
Haz clic en cualquier archivo para descargarlo. Todos los materiales están organizados para facilitar tu estudio.
</p> </div> <div class="grid gap-4"> ${clase.materiales.map((material) => renderTemplate`<div class="bg-white rounded-lg border border-gray-200 p-4 hover:border-primary-300 hover:shadow-md transition-all duration-200"> <div class="flex items-center justify-between"> <div class="flex items-center space-x-4"> <div class="text-3xl">${getIconoArchivo(material.tipo)}</div> <div> <h3 class="text-lg font-medium text-gray-900">${material.nombre}</h3> <p class="text-sm text-gray-500">
Tipo: ${material.tipo.toUpperCase()} • Tamaño: ${material.tama\u00F1o} </p> </div> </div> <a${addAttribute(material.url, "href")} download class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg>
Descargar
</a> </div> </div>`)} </div> <div class="mt-12 text-center"> <a href="/clases" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path> </svg>
Volver a Clases
</a> </div> ` })}`;
}, "C:/Users/benja/Desktop/profebenja/bemtorres.github.io/src/pages/clases/[id].astro", void 0);

const $$file = "C:/Users/benja/Desktop/profebenja/bemtorres.github.io/src/pages/clases/[id].astro";
const $$url = "/clases/[id]";

export { $$id as default, $$file as file, getStaticPaths, $$url as url };
