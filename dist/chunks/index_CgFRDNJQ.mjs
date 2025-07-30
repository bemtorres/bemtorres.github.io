import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_BYb7ya5r.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_8rIu6c_8.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sistema de Documentaci\xF3n - Inicio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center"> <h1 class="text-4xl font-bold text-gray-900 mb-6">
Bienvenido al Sistema de Documentación
</h1> <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
Accede fácilmente a todos los materiales de clase, ejercicios, presentaciones y documentos organizados por clase.
</p> <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"> <div class="bg-white p-6 rounded-lg shadow-md"> <div class="text-4xl mb-4">📁</div> <h3 class="text-xl font-semibold mb-2">Documentos Organizados</h3> <p class="text-gray-600">
Todos los archivos están organizados por clase para facilitar su acceso y descarga.
</p> </div> <div class="bg-white p-6 rounded-lg shadow-md"> <div class="text-4xl mb-4">📱</div> <h3 class="text-xl font-semibold mb-2">Fácil de Usar</h3> <p class="text-gray-600">
Interfaz simple e intuitiva diseñada específicamente para estudiantes.
</p> </div> </div> <div class="mt-12"> <a href="/clases" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">
Ver Clases Disponibles
<svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> </div> </div> ` })}`;
}, "C:/Users/benja/Desktop/profebenja/bemtorres.github.io/src/pages/index.astro", void 0);

const $$file = "C:/Users/benja/Desktop/profebenja/bemtorres.github.io/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
