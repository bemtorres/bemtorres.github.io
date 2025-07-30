import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_BYb7ya5r.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_8rIu6c_8.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const clases = [
    {
      id: "clase-1",
      titulo: "Introducci\xF3n a la Programaci\xF3n",
      descripcion: "Conceptos b\xE1sicos de programaci\xF3n y algoritmos",
      archivos: 5,
      fecha: "2024-01-15"
    },
    {
      id: "clase-2",
      titulo: "Estructuras de Datos",
      descripcion: "Arrays, listas, pilas y colas",
      archivos: 8,
      fecha: "2024-01-22"
    },
    {
      id: "clase-3",
      titulo: "Programaci\xF3n Orientada a Objetos",
      descripcion: "Clases, objetos, herencia y polimorfismo",
      archivos: 12,
      fecha: "2024-01-29"
    },
    {
      id: "clase-4",
      titulo: "Bases de Datos",
      descripcion: "SQL, relaciones y consultas",
      archivos: 6,
      fecha: "2024-02-05"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Clases Disponibles" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8"> <h1 class="text-3xl font-bold text-gray-900 mb-4">Clases Disponibles</h1> <p class="text-gray-600">
Selecciona una clase para ver todos los materiales y documentos disponibles.
</p> </div> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> ${clases.map((clase) => renderTemplate`<div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"> <div class="p-6"> <div class="flex items-center justify-between mb-4"> <h3 class="text-xl font-semibold text-gray-900">${clase.titulo}</h3> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"> ${clase.archivos} archivos
</span> </div> <p class="text-gray-600 mb-4">${clase.descripcion}</p> <div class="flex items-center justify-between"> <span class="text-sm text-gray-500">
Fecha: ${new Date(clase.fecha).toLocaleDateString("es-ES")} </span> <a${addAttribute(`/clases/${clase.id}`, "href")} class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">
Ver Materiales
<svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> </div> </div> </div>`)} </div> <div class="mt-12 text-center"> <p class="text-gray-500 text-sm">
¿No encuentras tu clase? Contacta al profesor para agregar nuevos materiales.
</p> </div> ` })}`;
}, "C:/Users/benja/Desktop/profebenja/bemtorres.github.io/src/pages/clases/index.astro", void 0);

const $$file = "C:/Users/benja/Desktop/profebenja/bemtorres.github.io/src/pages/clases/index.astro";
const $$url = "/clases";

export { $$Index as default, $$file as file, $$url as url };
