import { c as createComponent, b as createAstro, d as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate } from './astro/server_BYb7ya5r.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Sistema de documentaci\xF3n para estudiantes" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-gray-50 min-h-screen"> <header class="bg-white shadow-sm border-b"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center py-6"> <div class="flex items-center"> <h1 class="text-2xl font-bold text-gray-900">📚 Sistema de Documentación</h1> </div> <nav class="hidden md:flex space-x-8"> <a href="/" class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Inicio</a> <a href="/clases" class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Clases</a> </nav> </div> </div> </header> <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="bg-white border-t mt-12"> <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"> <p class="text-center text-gray-500 text-sm">
© 2024 Sistema de Documentación Estudiantil
</p> </div> </footer> </body></html>`;
}, "C:/Users/benja/Desktop/profebenja/bemtorres.github.io/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
