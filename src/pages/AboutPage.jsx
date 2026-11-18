import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import about1 from "../assets/about1.png";
import perforated1 from "../assets/perforated1.png";
import about2 from "../assets/about2.jpeg";
import about3 from "../assets/about3.jpeg";
import about4 from "../assets/about4.jpeg";
import about5 from "../assets/about5.jpeg";
import about6 from "../assets/about6.jpeg";



const ABOUT_IMAGES = [
  { src: about1, alt: "Asmitha Paper Agency warehouse and paper stock" },
  { src: perforated1, alt: "Perforated kraft lay paper for garment production" },
  { src: about2, alt: "Garment Cutting Underlay Paper (White) for Apparel Manufacturing" },
  { src: about3, alt: "Garment Cutting Underlay Paper (Kraft / Brown)" },
  { src: about4, alt: "CAD Plotter Rolls for Pattern Making and Technical Markers" },
  { src: about5, alt: "Duplex Pattern Boards for Garment CAD/CAM" },
  { src: about6, alt: "Garment CAD/CAM Pattern Industrial Paper Rolls" },
  


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
        title:
          "About Asmitha Paper Agency | Bulk Garment & Kraft Paper Supplier Tiruppur",
        description:
          "Learn about Asmitha Paper Agency in Tiruppur. Trusted B2B supplier of brown & white garment cutting underlay, perforated kraft lay, CAD plotter rolls, duplex pattern boards & HM poly rolls.",
        path: "/about",
      }}
    >
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center pt-8 animate-fade-up">
          <p className="text-sky-600 font-semibold mb-3">
            About Asmitha Paper Agency
          </p>

          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Tiruppur&apos;s Trusted B2B Garment &amp; Packaging Paper Supplier
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Based in Tiruppur, Asmitha Paper Agency (APA) is a specialized B2B
            supplier of industrial paper and poly rolls. We provide dependable,
            wholesale paper and packaging products to garment manufacturing
            units, export houses, CAD/CAM pattern studios, and packaging
            businesses across Tamil Nadu.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up" style={{ animationDelay: "160ms" }}>
            <h2 className="text-3xl font-bold mb-6">
              Our Core Business Focus
            </h2>
            <p className="text-gray-600 leading-8">
              We supply exact industrial grades matched to your production
              floor requirements. Our inventory is dedicated strictly to
              garment manufacturing, pattern making, and packaging
              workflows—ensuring reliable stock availability and consistent
              quality.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="rounded-2xl border border-gray-200 bg-sky-50 p-4 text-center">
                <p className="text-2xl font-black text-sky-700">60–400</p>
                <p className="text-sm text-gray-600 mt-1">GSM range</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-sky-50 p-4 text-center">
                <p className="text-2xl font-black text-sky-700">24&quot;–96&quot;</p>
                <p className="text-sm text-gray-600 mt-1">Roll widths</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-sky-50 p-4 text-center">
                <p className="text-2xl font-black text-sky-700">B2B</p>
                <p className="text-sm text-gray-600 mt-1">Bulk supply</p>
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
                Industrial paper supply
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Paper and poly rolls for production
              </h3>
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

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">What We Supply</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-600 leading-8">
            <li className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900">
                Garment Cutting Underlay
              </h3>
              100 GSM brown kraft and 80 GSM white underlay papers for clean
              fabric spreading.
            </li>
            <li className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900">
                Perforated Kraft Lay Paper
              </h3>
              80–100 GSM breathable paper designed for smooth spreading and
              automated cutting.
            </li>
            <li className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900">CAD Plotter Rolls</h3>
              60 GSM high-clarity paper for technical markers and pattern
              plotting.
            </li>
            <li className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900">
                CAD/CAM Duplex Pattern Boards
              </h3>
              Heavy-duty 220 to 400 GSM pattern boards for durable, repeatable
              apparel templates.
            </li>
            <li className="rounded-2xl border border-gray-200 p-5 md:col-span-2">
              <h3 className="font-bold text-gray-900">
                Auto-Cutter HM Poly Rolls
              </h3>
              92&quot; to 96&quot; open-width virgin and non-virgin poly rolls
              for automated spreading floors.
            </li>
          </ul>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Why Partner With APA?</h2>
          <ul className="grid md:grid-cols-3 gap-6 text-gray-600 leading-8">
            <li className="rounded-2xl bg-sky-50 p-5">
              <h3 className="font-bold text-gray-900">
                Tiruppur Textile Expertise
              </h3>
              Deep understanding of garment export and manufacturing
              requirements.
            </li>
            <li className="rounded-2xl bg-sky-50 p-5">
              <h3 className="font-bold text-gray-900">
                Custom GSM &amp; Widths
              </h3>
              Standard roll widths from 24&quot; to 96&quot; to fit your
              cutting tables and plotters.
            </li>
            <li className="rounded-2xl bg-sky-50 p-5">
              <h3 className="font-bold text-gray-900">Reliable Dispatch</h3>
              Streamlined bulk order delivery across Tiruppur and industrial
              hubs throughout Tamil Nadu.
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
