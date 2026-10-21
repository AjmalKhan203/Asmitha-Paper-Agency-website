import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { getProductById } from "../data/products";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const [activeImage, setActiveImage] = useState(0);
  const images = product?.images ?? [];

  useEffect(() => {
    if (images.length <= 1) return undefined;

    const timer = setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [images.length]);

  if (!product) {
    return (
      <Layout
        seo={{
          title: "Product Not Found | Asmitha Paper Agency",
          description: "Browse bulk paper products from Asmitha Paper Agency.",
          path: "/products",
        }}
      >
        <section className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="text-sky-700 font-semibold mb-3">Product not found</p>
          <h1 className="text-3xl md:text-4xl font-black mb-5">
            Browse our paper range
          </h1>
          <Link to="/products" className="text-sky-700 font-semibold hover:underline">
            View all products →
          </Link>
        </section>
      </Layout>
    );
  }

  const specifications = [
    ["Paper weight", product.gsm],
    ["Available widths & formats", product.widths.join(", ")],
    ["Supply format", product.format],
  ];

  return (
    <Layout
      seo={{
        title: product.seoTitle ?? `${product.title} | Asmitha Paper Agency`,
        description: product.metaDescription ?? product.description,
        path: `/products/${product.id}/`,
        product,
      }}
    >
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <Link to="/products" className="text-sm font-semibold text-sky-700 hover:underline">
            ← All products
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-12 md:pb-16 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="animate-fade-up">
            <p className="text-sky-700 font-semibold mb-4">Bulk paper supply for businesses</p>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
              {product.title}
            </h1>
            <p className="text-lg text-gray-600 leading-8 mb-8">
              {product.description}
            </p>
            <Link
              to={`/quote?product=${product.id}`}
              className="inline-flex items-center justify-center bg-sky-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-800"
            >
              Request a bulk quote
            </Link>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-sky-100 animate-fade-up">
            {images.map((src, index) => (
              <img
                key={`${src}-${index}`}
                src={src}
                alt={`${product.title} image ${index + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  index === activeImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {images.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((src, index) => (
                  <button
                    key={`${src}-dot-${index}`}
                    type="button"
                    aria-label={`Show product image ${index + 1}`}
                    onClick={() => setActiveImage(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeImage ? "w-8 bg-white" : "w-2.5 bg-white/70"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14 md:py-20 grid lg:grid-cols-[1fr_0.85fr] gap-12">
        <div>
          <p className="text-sky-700 font-semibold mb-2">Product specifications</p>
          <h2 className="text-3xl font-black mb-7">Choose a fit for your workflow</h2>
          <dl className="divide-y divide-gray-200 border-y border-gray-200">
            {specifications.map(([label, value]) => (
              <div key={label} className="grid sm:grid-cols-[180px_1fr] gap-2 py-4">
                <dt className="font-semibold text-gray-700">{label}</dt>
                <dd className="text-gray-600">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-gray-500 leading-6">{product.specNote}</p>
        </div>

        <aside className="bg-sky-50 border-l-4 border-sky-700 px-6 py-7 self-start">
          <h2 className="text-xl font-bold mb-3">A practical supply partner</h2>
          <p className="text-gray-700 leading-7">
            Share your required GSM, width, quantity, and delivery location. Asmitha Paper
            Agency can confirm the suitable available option and bulk pricing for your order.
          </p>
          <Link to={`/quote?product=${product.id}`} className="mt-5 inline-block font-semibold text-sky-800 hover:underline">
            Discuss your requirement →
          </Link>
        </aside>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <p className="text-sky-700 font-semibold mb-2">Built for practical business use</p>
        <h2 className="text-3xl font-black mb-8">Key features and benefits</h2>
        <ul className="grid md:grid-cols-2 gap-x-12 gap-y-5">
          {product.keyFeatures.map((feature) => (
            <li key={feature} className="flex gap-3 text-gray-700 leading-7">
              <span className="text-sky-700 font-bold" aria-hidden="true">+</span>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sky-700 font-semibold mb-2">Ways businesses use it</p>
          <h2 className="text-3xl font-black mb-8">Use cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {product.useCases.map((useCase, index) => (
              <article key={useCase.title} className="border-t-2 border-sky-700 pt-4">
                <p className="text-sm font-bold text-sky-700 mb-2">0{index + 1}</p>
                <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                <p className="text-gray-600 leading-7">{useCase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
        <div className="grid md:grid-cols-[0.7fr_1fr] gap-8 md:gap-14">
          <div>
            <p className="text-sky-700 font-semibold mb-2">Who it serves</p>
            <h2 className="text-3xl font-black">Businesses that use {product.title.toLowerCase()}</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {product.industries.map((industry) => (
              <li key={industry} className="flex gap-3 text-gray-700 leading-6">
                <span className="text-sky-700 font-bold" aria-hidden="true">+</span>
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-sky-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Need this paper in bulk?</h2>
            <p className="text-sky-100 leading-7">Tell us the size, GSM, quantity, and destination for a quote.</p>
          </div>
          <Link
            to={`/quote?product=${product.id}`}
            className="inline-flex justify-center bg-white text-sky-900 px-6 py-3 rounded-full font-semibold hover:bg-sky-50"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </Layout>
  );
}