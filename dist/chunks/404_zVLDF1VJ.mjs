import { c as createComponent, r as renderComponent, m as maybeRenderHead, a as renderTemplate } from './astro/server_BYb7ya5r.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_8rIu6c_8.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "P\xE1gina no encontrada" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center py-12"> <div class="text-6xl mb-4">😕</div> <h1 class="text-4xl font-bold text-gray-900 mb-4">Página no encontrada</h1> <p class="text-xl text-gray-600 mb-8">
Lo sentimos, la página que buscas no existe o ha sido movida.
</p> <div class="space-x-4"> <a href="/" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">
Ir al Inicio
</a> <a href="/clases" class="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">
Ver Clases
</a> </div> </div> ` })}`;
}, "C:/Users/benja/Desktop/profebenja/bemtorres.github.io/src/pages/404.astro", void 0);

const $$file = "C:/Users/benja/Desktop/profebenja/bemtorres.github.io/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
