import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductSlider({ products }) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setPerView(media.matches ? 2 : 1);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const maxIndex = Math.max(0, products.length - perView);
  const visibleIndex = Math.min(index, maxIndex);

    useEffect(() => {
    if (paused || maxIndex === 0) return undefined;

    const timer = setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 4500);

    return () => clearInterval(timer);
   }, [paused, maxIndex]);

   const slideWidth = 100 / perView;

   const goPrev = () => {
    setIndex((current) => (current <= 0 ? maxIndex : current - 1));
   };

    const goNext = () => {
    setIndex((current) => (current >= maxIndex ? 0 : current + 1));
   };

   return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${visibleIndex * slideWidth}%)` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="shrink-0 px-3 box-border"
              style={{ flexBasis: `${slideWidth}%` }}
            >
              <ProductCard product={product} className="h-full hover:scale-105" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          className="h-11 w-11 rounded-full border bg-white hover:bg-sky-50 hover:border-sky-300 font-semibold"
          aria-label="Previous products"
        >
          ←
        </button>

        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, dot) => (
            <button
              key={dot}
              type="button"
              aria-label={`Show product set ${dot + 1}`}
              onClick={() => setIndex(dot)}
              className={`h-2 rounded-full transition-all duration-300 ${
                dot === visibleIndex ? "w-8 bg-sky-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="h-11 w-11 rounded-full border bg-white hover:bg-sky-50 hover:border-sky-300 font-semibold"
          aria-label="Next products"
        >
          →
        </button>
      </div>
    </div>
  );
}
