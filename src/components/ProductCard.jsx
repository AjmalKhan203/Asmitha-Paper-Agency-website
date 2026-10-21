import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, className = "" }) {
  const images = product.images ?? [];
  const [isHovered, setIsHovered] = useState(false);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (!isHovered || images.length <= 1) return undefined;

    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % images.length);
    }, 1500);

    return () => clearInterval(timer);
  }, [isHovered, images.length]);

  const handleLeave = () => {
    setIsHovered(false);
    setSlide(0);
  };

  return (
    <article
      className={`bg-white rounded-xl border border-gray-200 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-lg hover:scale-[1.01] transition-transform duration-300 p-5 flex flex-col ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleLeave}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-sky-100">
        {images.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt={product.title}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              index === slide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div
          className={`absolute inset-0 bg-black/55 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Link
            to={`/quote?product=${product.id}`}
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-sky-50"
          >
            Request a Quote →
          </Link>
        </div>
      </div>

      <div className="pt-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3 leading-snug">{product.title}</h3>
        <p className="text-gray-600 leading-7 mb-5">{product.description}</p>

        <dl className="mt-auto space-y-4 text-sm">
          <div>
            <dt className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">
              GSM (paper weight)
            </dt>
            <dd>
              <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 font-bold text-sky-800">
                {product.gsm}
              </span>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">
              Standard widths
            </dt>
            <dd className="flex flex-wrap gap-2">
              {product.widths.map((width) => (
                <span
                  key={width}
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 font-bold text-gray-700"
                >
                  {width}
                </span>
              ))}
            </dd>
          </div>
          <div className="rounded-lg bg-gray-50 p-3">
            <dt className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">
              Best for
            </dt>
            <dd className="text-gray-700 leading-6">{product.bestFor}</dd>
          </div>
        </dl>

        <Link
          to={`/products/${product.id}`}
          className="mt-4 inline-flex items-center font-semibold text-sky-700 hover:text-sky-900 hover:underline"
        >
          Explore product details →
        </Link>

        <Link
          to={`/quote?product=${product.id}`}
          className="mt-6 inline-flex md:hidden items-center justify-center bg-sky-600 text-white px-5 py-2 rounded-full font-semibold text-center"
        >
          Request a Quote →
        </Link>
      </div>
    </article>
  );
}
