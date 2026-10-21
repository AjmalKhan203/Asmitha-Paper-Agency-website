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
        title: "Bulk Paper Roll Supplier in Tiruppur | Asmitha Paper Agency",
        description:
          "Buy bulk brown kraft paper, perforated paper rolls, and plain catering table rolls from Asmitha Paper Agency in Tiruppur, Tamil Nadu.",
        path: "/home",
        products: true,
      }}
    >
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="text-sky-600 font-semibold mb-4">
              Tiruppur-based B2B bulk paper supplier
            </p>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Premium Bulk Paper Suppliers in Tiruppur
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-8">
              Asmitha Paper Agency is a B2B bulk paper supplier based in
              Tiruppur. We supply brown kraft paper, perforated pattern and
              packaging paper, and plain catering table rolls to apparel units,
              packaging businesses, hotels, and caterers across Tamil Nadu.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-sky-700 font-semibold"
              >
                Request a Quote
              </Link>

              <Link
                to="/products"
                className="border px-6 py-3 rounded-full hover:bg-gray-100"
              >
                View Products
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
          <h2 className="text-4xl font-bold text-center mb-10">Why Choose APA?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-3">Tiruppur B2B Supply</h3>
              <p className="text-gray-600 leading-7">A local paper partner for garment, textile, packaging, catering, and commercial businesses.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Bulk Order Support</h3>
              <p className="text-gray-600 leading-7">Discuss your required paper type, GSM, size, quantity, and delivery destination for a practical quote.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Tamil Nadu Delivery</h3>
              <p className="text-gray-600 leading-7">We coordinate delivery for B2B paper orders across Tiruppur and other Tamil Nadu districts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div
          className="max-w-5xl mx-auto px-4 md:px-6 text-center animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-600 leading-8 mb-8">
            Asmitha Paper Agency is a Tiruppur-based B2B supplier for bulk paper
            orders. We sell brown kraft paper, perforated packaging paper,
            and plain catering table rolls to apparel units, packaging businesses,
            hotels, restaurants, and catering businesses. Our business is paper
            supply only.
          </p>
          <Link to="/about" className="text-sky-600 font-semibold hover:underline">
            Learn more about APA →
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.5031310403056!2d77.33836948871611!3d11.150334825729503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907fc49d61c71%3A0xffbfe8a8d5840717!2sAsmitha%20paper%20agency!5e0!3m2!1sen!2sus!4v1791456422477!5m2!1sen!2sus"
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
