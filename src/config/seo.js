import { createContext } from "react";
import { PRODUCTS } from "../data/products";
import defaultShareImage from "../assets/logo.png";

const DEFAULT_SITE_URL = "https://YOUR-SITE-NAME.netlify.app";

export const SeoCollectorContext = createContext(null);

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Asmitha Paper Agency",
  description:
    "B2B supplier of bulk paper rolls for packaging, catering, and food-serving businesses.",
  url: DEFAULT_SITE_URL,
  areaServed: ["Tiruppur", "Tamil Nadu"],
  knowsAbout: [
    "Brown kraft paper rolls",
    "Perforated pattern paper rolls",
    "Plain catering table rolls",
  ],
};

function productSchema(product, siteUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.images.map((image) => new URL(image, siteUrl).href),
    category: "Bulk paper rolls",
    brand: {
      "@type": "Brand",
      name: "Asmitha Paper Agency",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "GSM",
        value: product.gsm,
      },
      {
        "@type": "PropertyValue",
        name: "Available widths and formats",
        value: product.widths.join(", "),
      },
    ],
  };
}

export function getSeoMetadata({
  title,
  description,
  path = "",
  products = false,
  product,
}) {
  const siteUrl = (
    import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL
  ).replace(/\/+$/, "");
  const canonicalPath = path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bulk paper rolls",
    itemListElement: PRODUCTS.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `${siteUrl}/products/${item.id}/`,
    })),
  };
  const schemas = [
    { ...ORGANIZATION_SCHEMA, url: siteUrl },
    ...(products ? [productListSchema] : []),
    ...(product ? [productSchema(product, siteUrl)] : []),
  ];
  const imageUrl = new URL(product?.images?.[0] ?? defaultShareImage, siteUrl).href;

  return {
    title,
    description,
    canonicalUrl,
    imageUrl,
    isProduct: Boolean(product),
    schemas,
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function renderSeoHead(metadata) {
  const { title, description, canonicalUrl, imageUrl, isProduct, schemas } = metadata;
  const escapedTitle = escapeHtml(title);
  const escapedDescription = escapeHtml(description);
  const escapedCanonicalUrl = escapeHtml(canonicalUrl);
  const imageTags = imageUrl
    ? `<meta property="og:image" content="${escapeHtml(imageUrl)}"/><meta name="twitter:image" content="${escapeHtml(imageUrl)}"/>`
    : "";
  const schemaJson = JSON.stringify(schemas).replaceAll("</script", "<\\/script");

  return `<title>${escapedTitle}</title><meta name="description" content="${escapedDescription}"/><meta property="og:title" content="${escapedTitle}"/><meta property="og:description" content="${escapedDescription}"/><meta property="og:type" content="${isProduct ? "product" : "website"}"/><meta property="og:url" content="${escapedCanonicalUrl}"/><meta property="og:site_name" content="Asmitha Paper Agency"/>${imageTags}<meta name="twitter:card" content="${imageUrl ? "summary_large_image" : "summary"}"/><meta name="twitter:title" content="${escapedTitle}"/><meta name="twitter:description" content="${escapedDescription}"/><link rel="canonical" href="${escapedCanonicalUrl}"/><script type="application/ld+json" data-seo-schema="true">${schemaJson}</script>`;
}