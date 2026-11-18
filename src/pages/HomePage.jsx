import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ProductSlider from "../components/ProductSlider";
import HeroSlideshow from "../components/HeroSlideshow";
import ReviewsSlider from "../components/ReviewsSlider";
import WhatsAppButton from "../components/WhatsAppButton";
import ObfuscatedEmail from "../components/ObfuscatedEmail";
import {
  BUSINESS_ADDRESS,
  BUSINESS_PHONE_NUMBERS,
} from "../config/business";
import { PRODUCTS } from "../data/products";

export default function HomePage() {
  return (
    <Layout
      seo={{
        title:
          "Bulk Garment, Kraft & CAD Plotter Paper Supplier in Tiruppur | Asmitha Paper Agency",
        description:
          "Leading B2B bulk paper roll supplier in Tiruppur. Order brown & white garment cutting underlay, perforated kraft lay paper, CAD plotter rolls (60–400 GSM), and HM poly rolls across Tamil Nadu.",
        path: "/home",
        products: true,
      }}
    >
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="text-sky-600 font-semibold mb-4">
              Tiruppur-Based B2B Bulk Paper & Poly Roll Supplier
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Bulk Garment, CAD/CAM & Packaging Paper Roll Suppliers in Tiruppur
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-8">
              Asmitha Paper Agency supplies bulk brown and white garment cutting
              underlay paper, perforated kraft lay paper, CAD plotter rolls,
              duplex pattern boards, and open-width poly rolls to apparel units,
              textile manufacturers, and packaging businesses across Tamil Nadu.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-sky-700 font-semibold"
              >
                Request a Bulk Quote
              </Link>

              <Link
                to="/products"
                className="border px-6 py-3 rounded-full hover:bg-gray-100"
              >
                Explore Product Catalog
              </Link>
            </div>
          </div>

          <div
            className="animate-fade-up overflow-hidden rounded-3xl shadow-xl"
            style={{ animationDelay: "120ms" }}
          >
            <HeroSlideshow />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Why Apparel & Packaging Units Choose APA
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-3">
                Tiruppur Textile & Garment Focus
              </h3>
              <p className="text-gray-600 leading-7">
                Dedicated B2B supply of cutting underlay, perforated lay, and
                CAD/CAM pattern rolls tailored for garment factories and export
                houses.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">
                Custom GSM & Standard Roll Widths
              </h3>
              <p className="text-gray-600 leading-7">
                Order exact specifications from 60 GSM plotter paper up to 400
                GSM duplex pattern rolls, in widths ranging from 24&quot; to
                96&quot;.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">
                Reliable Tamil Nadu B2B Delivery
              </h3>
              <p className="text-gray-600 leading-7">
                Streamlined dispatch and bulk order logistics across Tiruppur,
                Coimbatore, Salem, Erode, and other industrial hubs in Tamil
                Nadu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div
          className="max-w-5xl mx-auto px-4 md:px-6 text-center animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          <h2 className="text-4xl font-bold mb-6">
            About Asmitha Paper Agency
          </h2>
          <p className="text-lg text-gray-600 leading-8 mb-8">
            Asmitha Paper Agency is a specialized B2B bulk paper and poly roll
            supplier based in Tiruppur. We support apparel manufacturing units,
            CAD/CAM pattern makers, textile processors, and industrial packaging
            businesses with consistent, high-grade paper rolls.
          </p>
          <p className="text-lg text-gray-600 leading-8 mb-8">
            From 80–100 GSM kraft and white underlay rolls for fabric spreading
            to 220–400 GSM pattern rolls and auto-cutter HM poly rolls, we supply
            exact technical grades matched to your production floor workflows.
          </p>
          <Link to="/about" className="text-sky-600 font-semibold hover:underline">
            Learn more about our B2B supply →
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-center mb-14 animate-fade-up">
            Our Products
          </h2>

          <div className="animate-fade-up">
            <ProductSlider products={PRODUCTS} />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-sky-600 font-semibold text-center mb-3">
            Trusted by Businesses Across Tamil Nadu
          </p>
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our B2B Customers Say
          </h2>
          <ReviewsSlider />
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10">
          <div className="animate-fade-up">
            <h2 className="text-4xl font-bold mb-8">Contact Us</h2>

            <div className="space-y-5 text-gray-600 leading-7">
              <p>📞 {BUSINESS_PHONE_NUMBERS}</p>
              <ObfuscatedEmail />
              <p>📍 {BUSINESS_ADDRESS}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="inline-block bg-sky-600 text-white px-6 py-3 rounded-full font-semibold"
              >
                Request a Quote
              </Link>
              <WhatsAppButton className="inline-block border px-6 py-3 rounded-full hover:bg-gray-100" />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lg animate-fade-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15658.0010507694!2d77.33032166146432!3d11.150547824348598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9070518398315%3A0x2d1c4180f25f47c2!2sAsmitha%20paper%20agency!5e0!3m2!1sen!2sin!4v1794919952659!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Asmitha Paper Agency location map"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
