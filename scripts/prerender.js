import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { createServer } from "vite";

const outputDirectory = resolve("dist");
const staticRoutes = [
  "/",
  "/home",
  "/products",
  "/about",
  "/contact",
  "/quote",
  "/delivery",
  "/terms",
  "/privacy",
  "/help",
];

function outputPathForRoute(route) {
  return route === "/"
    ? resolve(outputDirectory, "index.html")
    : resolve(outputDirectory, route.slice(1), "index.html");
}

function mapBuiltAssets(markup, manifest) {
  return markup.replace(/\/src\/assets\/([^"'\s<>]+)/g, (match, encodedName) => {
    const assetName = decodeURIComponent(encodedName);
    const entry = Object.entries(manifest).find(([key]) =>
      key.endsWith(`/assets/${assetName}`),
    )?.[1];

    if (!entry) {
      throw new Error(`No built asset found for ${assetName}`);
    }

    return `/${entry.file}`;
  });
}

const template = await readFile(
  resolve(outputDirectory, "index.html"),
  "utf8",
);
const manifest = JSON.parse(
  await readFile(resolve(outputDirectory, ".vite/manifest.json"), "utf8"),
);
const vite = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

try {
  const [{ AppRoutes }, { PRODUCTS }, { renderSeoHead, SeoCollectorContext }] =
    await Promise.all([
    vite.ssrLoadModule("/src/App.jsx"),
    vite.ssrLoadModule("/src/data/products.js"),
    vite.ssrLoadModule("/src/config/seo.js"),
  ]);
  const routes = [
    ...staticRoutes,
    ...PRODUCTS.map((product) => `/products/${product.id}`),
  ];

  for (const route of routes) {
    let metadata;
    const markup = renderToString(
      createElement(
        SeoCollectorContext.Provider,
        { value: (value) => { metadata = value; } },
        createElement(
          MemoryRouter,
          { initialEntries: [route] },
          createElement(AppRoutes),
        ),
      ),
    );
    const markerIndex = markup.indexOf('data-prerender-root="true"');

    if (markerIndex < 0) {
      throw new Error(`Could not find the page root while rendering ${route}`);
    }

    const pageStart = Math.max(
      markup.lastIndexOf("<div", markerIndex),
      markup.lastIndexOf("<main", markerIndex),
    );
    const pageMarkup = mapBuiltAssets(markup.slice(pageStart), manifest);
    const html = template
      .replace("<!--SEO_HEAD-->", mapBuiltAssets(renderSeoHead(metadata), manifest))
      .replace('<div id="root"></div>', `<div id="root">${pageMarkup}</div>`);
    const outputPath = outputPathForRoute(route);

    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
  }
} finally {
  await vite.close();
}