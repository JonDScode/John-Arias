import type { APIRoute } from "astro";
import { site } from "../config";

const paginas = ["/", "/gracias/"];

export const GET: APIRoute = () => {
  const origin = site.url + site.base;
  const hoy = new Date().toISOString().split("T")[0];

  const urls = paginas
    .map(
      (p) => `  <url>
    <loc>${origin}${p}</loc>
    <lastmod>${hoy}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p === "/" ? "1.0" : "0.5"}</priority>
  </url>`,
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
