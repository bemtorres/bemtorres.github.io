import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error('site is not defined in astro.config.mjs');
  }

  const pages = [
    '',
    '/clases',
    '/clases/clase-1',
    '/clases/clase-2',
    '/clases/clase-3',
    '/clases/clase-4'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `
  <url>
    <loc>${site}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}; 