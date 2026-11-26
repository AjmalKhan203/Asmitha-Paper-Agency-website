import { createContext } from "react";
import { PRODUCTS } from "../data/products";
import defaultShareImage from "../assets/logo.png";
import {
  BUSINESS_EMAIL,
  PRIMARY_PHONE_NUMBER,
  BUSINESS_COORDINATES,
} from "./business";

const DEFAULT_SITE_URL = "https://asmithapaperagency.vercel.app";

export const SeoCollectorContext = createContext(null);

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "WholesaleStore"],
  name: "Asmitha Paper Agency",
  description:
    "B2B supplier of bulk paper rolls for packaging, catering, and food-serving businesses.",
  url: DEFAULT_SITE_URL,
  telephone: PRIMARY_PHONE_NUMBER,
  email: BUSINESS_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "SF No: 316, D.No: 1134/1A, Ganga Nagar, Poyampalayam Pirivu, Pitchampalayam Pudur",
    addressLocality: "Tiruppur",
    addressRegion: "Tamil Nadu",
    postalCode: "641603",
    addressCountry: "IN",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Tiruppur",
    },
    {
      "@type": "State",
      name: "Tamil Nadu",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS_COORDINATES.split(",")[0].trim(),
    longitude: BUSINESS_COORDINATES.split(",")[1].trim(),
  },
  knowsAbout: [
    "Brown kraft paper rolls",
    "Garment cutting underlay paper",
    "Perforated pattern paper rolls",
    "Plain catering table rolls",
    "CAD plotter paper rolls",
    "Duplex pattern boards",
    "HM poly rolls",
  ],
};

function productSchema(product, siteUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    url: `${siteUrl}/products/${product.id}/`,
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
  noIndex = false,
}) {
  const siteUrl = (
    import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL
  ).replace(/\/+$/, "");
  const canonicalPath = path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`;
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const imageUrl = new URL(
    product?.images?.[0] ?? defaultShareImage,
    siteUrl,
  ).href;
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
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteUrl}/`,
    },
  ];
  if (path !== "/" && path !== "/home") {
    if (path.startsWith("/products")) {
      breadcrumbItems.push({
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${siteUrl}/products/`,
      });
    }
    if (product) {
      breadcrumbItems.push({
        "@type": "ListItem",
        position: breadcrumbItems.length + 1,
        name: product.title,
        item: canonicalUrl,
      });
    } else {
      breadcrumbItems.push({
        "@type": "ListItem",
        position: breadcrumbItems.length + 1,
        name: title,
        item: canonicalUrl,
      });
    }
  }
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Asmitha Paper Agency",
    url: siteUrl,
  };
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": product ? "ItemPage" : products ? "CollectionPage" : "WebPage",
    name: title,
    description,
    url: canonicalUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Asmitha Paper Agency",
      url: siteUrl,
    },
  };
  const schemas = [
    { ...ORGANIZATION_SCHEMA, url: siteUrl, telephone: PRIMARY_PHONE_NUMBER },
    websiteSchema,
    pageSchema,
    breadcrumbSchema,
    ...(products ? [productListSchema] : []),
    ...(product ? [productSchema(product, siteUrl)] : []),
  ];

  return {
    title,
    description,
    canonicalUrl,
    imageUrl,
    isProduct: Boolean(product),
    noIndex,
    robots: noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
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
  const {
    title,
    description,
    canonicalUrl,
    imageUrl,
    isProduct,
    robots,
    schemas,
  } = metadata;
  const escapedTitle = escapeHtml(title);
  const escapedDescription = escapeHtml(description);
  const escapedCanonicalUrl = escapeHtml(canonicalUrl);
  const imageTags = imageUrl
    ? `<meta property="og:image" content="${escapeHtml(imageUrl)}"/><meta name="twitter:image" content="${escapeHtml(imageUrl)}"/>`
    : "";
  const schemaJson = JSON.stringify(schemas).replaceAll("</script", "<\\/script");

  return `<title>${escapedTitle}</title><meta name="robots" content="${escapeHtml(robots)}"/><meta name="description" content="${escapedDescription}"/><meta property="og:title" content="${escapedTitle}"/><meta property="og:description" content="${escapedDescription}"/><meta property="og:type" content="${isProduct ? "product" : "website"}"/><meta property="og:url" content="${escapedCanonicalUrl}"/><meta property="og:site_name" content="Asmitha Paper Agency"/><meta property="og:locale" content="en_IN"/>${imageTags}<meta name="twitter:card" content="${imageUrl ? "summary_large_image" : "summary"}"/><meta name="twitter:title" content="${escapedTitle}"/><meta name="twitter:description" content="${escapedDescription}"/><link rel="canonical" href="${escapedCanonicalUrl}"/><script type="application/ld+json" data-seo-schema="true">${schemaJson}</script>`;
}