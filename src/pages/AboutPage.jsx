import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import perforated1 from "../assets/perforated1.png";

const ABOUT_IMAGES = [
  { src: about1, alt: "Asmitha Paper Agency warehouse and paper stock" },
  { src: about2, alt: "Bulk paper supply for business customers" },
  { src: about3, alt: "Paper rolls and packaging material stock" },
  { src: perforated1, alt: "Perforated paper roll for catering use" },  
];

export default function AboutPage() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((current) => (current + 1) % ABOUT_IMAGES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);
  return (
    <Layout
      seo={{
        title: "About Asmitha Paper Agency | Tiruppur Paper Supplier",
        description:
          "Learn about Asmitha Paper Agency, a Tiruppur B2B supplier of brown kraft paper, perforated paper rolls, and plain catering table rolls.",
        path: "/about",
      }}
    >
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center pt-8 animate-fade-up">
          <p className="text-sky-600 font-semibold mb-3">
            Tiruppur-based B2B bulk supplier
          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            About Our Tiruppur Paper Supply Business
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            At Asmitha Paper Agency (APA), we provide B2B bulk paper supply for
            businesses that use paper in packaging and food serving. Our range
            includes brown kraft paper, perforated packaging paper, and plain
            catering table roll.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up" style={{ animationDelay: "160ms" }}>
            <h2 className="text-3xl font-bold mb-6">
              Bulk Paper Supply for Businesses
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              Our paper is suitable for pattern preparation, garment cutting,
              marker making, food serving, tray lining, and takeaway packing.
              We sell paper products only; we do not provide tailoring,
              garment manufacturing, restaurant, or catering services.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              We serve customers across Tiruppur and arrange delivery to other
              districts. See our delivery information for service details.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="rounded-2xl border border-gray-200 bg-sky-50 p-4 text-center">
                <p className="text-2xl font-black text-sky-700">Bulk</p>
                <p className="text-sm text-gray-600 mt-1">Supply</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-sky-50 p-4 text-center">
                <p className="text-2xl font-black text-sky-700">Fast</p>
                <p className="text-sm text-gray-600 mt-1">Delivery</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-sky-50 p-4 text-center">
                <p className="text-2xl font-black text-sky-700">B2B</p>
                <p className="text-sm text-gray-600 mt-1">Focus</p>
              </div>
            </div>
          </div>

          <div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gray-100 animate-fade-up shadow-lg"
            style={{ animationDelay: "80ms" }}
          >
            {ABOUT_IMAGES.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  index === activeImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-sky-200">
                Warehouse view
              </p>
              <h3 className="mt-2 text-2xl font-bold">Stocked for business orders</h3>
            </div>
            <div className="absolute bottom-5 right-5 flex gap-2">
              {ABOUT_IMAGES.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`Show About image ${index + 1}`}
                  onClick={() => setActiveImage(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeImage ? "w-8 bg-white" : "w-2.5 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
