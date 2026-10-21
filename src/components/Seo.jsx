import { useContext, useEffect } from "react";
import { getSeoMetadata, SeoCollectorContext } from "../config/seo";

function upsertMeta(attribute, value, content) {
  const selector = `meta[${attribute}="${value}"]`;
  let element = document.head.querySelector(selector);

  if (!content) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function Seo(props) {
  const collector = useContext(SeoCollectorContext);
  const metadata = getSeoMetadata(props);

  useEffect(() => {
    if (collector) return;

    const {
      title,
      description,
      canonicalUrl,
      imageUrl,
      isProduct,
      schemas,
    } = metadata;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", isProduct ? "product" : "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:site_name", "Asmitha Paper Agency");
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("name", "twitter:card", imageUrl ? "summary_large_image" : "summary");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let schema = document.head.querySelector("script[data-seo-schema]");
    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.dataset.seoSchema = "true";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(schemas);
  }, [collector, metadata]);

  if (collector) {
    collector(metadata);
  }

  return null;
}
